function Contact() {
  return (
    <main className="contact-page">
      <h1>Contact Us</h1>
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