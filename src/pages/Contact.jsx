import "../style/Contact.css";
function Contact() {
  return (
    <main className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Home delivery service: All the city of Stockholm (redacted) and Malmo (redacted) with
        additional cost.
      </p>
      <p>
        Place to pick up order: Via la Costa Avenue. Blue Port gated neighborhood. We will
        send you the GPS Location via WhatsApp.
      </p>
      Orders must be placed 2 days before for greater security, processing and availability.
      <p>
        Our working hours are: <br />
        Tuesday to Saturday <br />
        9 a.m. at 2 p.m.
      </p>
      <p>
        We'd love to hear from you! Email us at <a href="mailto:munamii@email.com">Munamii@email.com</a>
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            required
            placeholder="Type your message here..."
            rows={5}
          />
        </div>
        <button type="submit" disabled>
          Send (demo only)
        </button>
      </form>
    </main>
  );
}

export default Contact;