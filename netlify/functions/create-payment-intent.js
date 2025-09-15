import stripePackage from 'stripe';
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    let data;
    try {
      data = typeof event.body === "string" ? JSON.parse(event.body) : event.body;

    } catch (e) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid JSON in request body" })
      };
    }

    const { amount, currency, cart } = data;
    if (!amount || !currency || !cart) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing amount, currency, or cart', received: data })
      };
    }
    
    const isDevelopment = process.env.NODE_ENV === 'development';
    const BASE_URL = process.env.BASE_URL || (isDevelopment ? 'http://localhost:8888' : 'https://munamii.netlify.app');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cart.map(item => ({
        price_data: {
          currency,
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${BASE_URL}/success`,
      cancel_url: `${BASE_URL}/cancel`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message })
    };
  }
};
