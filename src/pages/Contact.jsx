function Contact() {
  return (
    <main className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Home delivery service: All the city of Stockholm (redacted) and Malmo (redacted) with
        additional cost.
      </p>
      <p>  Place to pick up order: Via la Costa Avenue. Blue Port gated neighborhood. We will
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
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <button type="submit" disabled>Send (demo only)</button>
      </form>
    </main>
  );
}

export default Contact;