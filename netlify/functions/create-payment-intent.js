// netlify/functions/create-payment-intent.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
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
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Payment intent creation started' 
        // DEBUG: Uncomment the next line to see the received data
        , received: data
        // DEBUG: Uncomment the next line to see the cart items
        , cartItems: cart
        // DEBUG: Uncomment the next line to see the amount and currency
        , amount: amount, currency: currency
      })
    }; //DEBUG
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
      success_url: 'https://munamii.netlify.app/success',
      cancel_url: 'https://munamii.netlify.app/cancel',
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
