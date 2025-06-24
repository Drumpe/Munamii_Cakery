import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

function CheckoutForm({ sessionId }) {
  const stripe = useStripe();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError(null);
    if (!stripe) {
      setProcessing(false);
      return;
    }
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) setError(error.message);
    setProcessing(false);
  };

  return (
    <form onSubmit={handleCheckout} className="checkout-form">
      <button type="submit" disabled={!stripe || processing}>
        {processing ? "Redirecting..." : "Proceed to Payment"}
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}

export default CheckoutForm;
