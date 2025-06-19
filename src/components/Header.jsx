import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/Style.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="logo">
        <img src="/images/logo.png" alt="Munamii Cakery Logo" />
      </div>
      <nav className={`nav-links${menuOpen ? " open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a className="snipcart-checkout shopcart">Shopping Cart</a>
      </nav>
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
      {/* <a className="snipcart-checkout shopcart" style={{marginLeft: "1rem"}}>
        Shopping Cart
      </a> */}
    </header>
  );
}

export default Header;