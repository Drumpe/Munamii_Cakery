import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { stripePromise } from "../stripePromise";

function CheckoutPage({ cart, clientSecret }) {
  const options = {
    clientSecret,
    appearance: { theme: 'stripe' }
  };

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm cart={cart} />
      </Elements>
    </main>
  );
}

export default CheckoutPage;
