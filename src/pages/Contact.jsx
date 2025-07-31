import "../style/Contact.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [lastSent, setLastSent] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (sending) return;

    const now = Date.now();
    if (lastSent && now - lastSent < 120000) {
      toast.error('I like you too, but please don\'t spam me.');
      return;
    }

    const formData = new FormData(form.current);
    const name = formData.get('user_name')?.trim();
    const email = formData.get('user_email')?.trim();
    const message = formData.get('message')?.trim();
    if (!name || !email || !message) {
      toast.error('All fields must be filled in.');
      return;
    }

    setSending(true);
    emailjs
      .sendForm('service_i6vpd2q', 'template_g7uvgi1', form.current, {
        publicKey: 'eWIJDb7rkUxt6UZ6K',
      })
      .then(
        () => {
          setLastSent(Date.now());
          toast.success('Message sent! We will get back to you soon.');
          form.current.reset();
        },
        (error) => {
          toast.error('Something went wrong. Please try again.');
        },
      )
      .finally(() => setSending(false));
  };

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
        We'd love to hear from you! Email us at <a href="mailto:munamii@WeDontExistEmail.com">Munamii@email.com</a>
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        autoComplete="off"
      >
        <div className="form-group">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            name="user_name"
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
            name="user_email"
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
        <input
          type="submit"
          disabled={sending}
          value={sending ? 'Sending...' : 'Send Message'}
          className="submit-button custom-button"
        />
      </form>
    </main>
  );
}

export default Contact;