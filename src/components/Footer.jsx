import "../style/Style.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        {" | "}
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        {" | "}
        <a href="mailto:munamii@email.com">Contact via Email</a>
      </div>
      <div className="footer-copy">&copy; {new Date().getFullYear()} Munamii Cakery</div>
    </footer>
  );
}

export default Footer;