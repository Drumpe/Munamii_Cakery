import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function CheckoutForm({ cart }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);
    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      elements._clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );
    if (error) {
      setError(error.message);
      setProcessing(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setSuccess(true);
      setProcessing(false);
    }
  };

  if (success) {
    return <div>Payment successful! Thank you for your order.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <CardElement options={{ hidePostalCode: true }} />
      <button type="submit" disabled={!stripe || processing}>
        {processing ? "Processing..." : "Pay"}
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}

export default CheckoutForm;
