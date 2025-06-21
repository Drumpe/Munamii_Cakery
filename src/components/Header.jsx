import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../style/Style.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

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

  return (
    <header className="site-header">
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
        <a className="snipcart-checkout" onClick={() => setMenuOpen(false)}>Shopping Cart</a>
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
    </header>
  );
}

export default Header;