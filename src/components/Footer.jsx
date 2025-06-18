import "../style/Style.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        {" | "}
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        {" | "}
        <a href="mailto:your@email.com">Contact via Email</a>
      </div>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Bakery</div>
    </footer>
  );
}

export default Footer;