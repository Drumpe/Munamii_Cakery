import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CheckoutPage from "./pages/CheckoutPage";
import { stripePromise } from "./stripePromise";

import "./style/Style.css";

function parseSEK(priceStr) {
  if (typeof priceStr !== "string") return 0;
  return parseFloat(priceStr.replace(/[^\d,\.]/g, '').replace(',', '.')) || 0;
}

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

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    const total = cart.reduce((sum, item) => sum + item.quantity * parseSEK(item.price || item.priceStr || item.priceSEK), 0);
    const amount = Math.round(total * 100); // SEK to öre
    try {
      const response = await fetch("/.netlify/functions/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "sek" })
      });
      const data = await response.json();
      if (!data.clientSecret) throw new Error(data.error || "No client secret returned");
      setClientSecret(data.clientSecret);
      navigate("/checkout");
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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default AppRoutes;
