import React from "react";
import { parseSEK } from "../utils";

function CartPage({ cart, onCheckout }) {
  const total = cart.reduce(
    (sum, item) => sum + item.quantity * parseSEK(item.price),
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} × {item.quantity} — {item.price} SEK
            </li>
          ))}
        </ul>
      )}
      <div>Total: {total.toFixed(2)} SEK</div>
      <button onClick={onCheckout} disabled={cart.length === 0}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartPage;