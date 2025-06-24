import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../style/Style.css";
import { parseSEK } from "../utils";

function Header({ cart, onCheckout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Calculate cart summary
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + parseSEK(item.price) * item.quantity, 0);

  return (
    <header className="site-header">
      <p>This site is for educational purpose only! Version: 0.1</p>
      <div className="logo">
        <img src="/images/logo.png" alt="Munamii Cakery Logo" />
      </div>
      {menuOpen && <div className="menu-backdrop" />}
      <nav
        ref={navRef}
        className={`nav-links${menuOpen ? " open" : ""}`}
        style={menuOpen ? { zIndex: 1001 } : {}}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
      <div
        className="cart-summary"
        tabIndex={0}
        aria-label="Open cart"
        onClick={() => navigate("/cart")}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") navigate("/cart"); }}
        role="button"
      >
        <span role="img" aria-label="Cart">🛒</span>
        <span className="cart-summary-text">
          {totalItems} items | {totalPrice.toFixed(2)} SEK
        </span>
      </div>
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;