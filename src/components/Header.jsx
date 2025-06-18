import { Link } from "react-router-dom";
import "../style/Style.css";

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <img src="/images/logo.png" alt="Bakery Logo" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;