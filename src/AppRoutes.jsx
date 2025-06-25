import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { stripePromise } from "./stripePromise";
import { parseSEK } from "./utils";

import "./style/Style.css";

function AppRoutes() {
  const [cart, setCart] = useState([]);
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevCart, item];
    });
  };

  const MIN_AMOUNT_SEK = 1; // Stripe's minimum for SEK

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, item) => sum + item.quantity * parseSEK(item.price || item.priceStr || item.priceSEK), 0);
    if (total < MIN_AMOUNT_SEK) {
      alert("Minimum order amount is 1.00 SEK.");
      return;
    }
    const amount = Math.round(total * 100); // SEK to öre
    try {
      const response = await fetch("/.netlify/functions/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "sek", cart })
      });

      const data = await response.json();

      if (!data.sessionId) throw new Error(data.error || "No session id returned");
      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (err) {
      alert("Payment error: " + err.message);
    }
  };

  return (
    <>
      <Header cart={cart} onCheckout={handleCheckout} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} clientSecret={clientSecret} />} />
          <Route path="/cart" element={<CartPage cart={cart} onCheckout={handleCheckout} />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default AppRoutes;
