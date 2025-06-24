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
    const { amount, currency } = JSON.parse(event.body);
    if (!amount || !currency) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing amount or currency' })
      };
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      // You can add more options here (metadata, receipt_email, etc.)
    });
    if (!paymentIntent || !paymentIntent.client_secret) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Stripe did not return a client secret' })
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message })
    };
  }
};
