import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      form.current.reset();
      setStatus("sent");
    } catch (error) {
      // EmailJS returns { status, text } — text says exactly what it rejected
      console.error("EmailJS failed:", error?.status, error?.text || error);
      setStatus("error");
    }
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kumaramansingh137@gmail.com</h5>
            <a href="mailto:kumaramansingh137@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Aman Kumar</h5>
            <a
              href="https://www.linkedin.com/in/aman137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+917898744884</h5>
            <a
              href="https://api.whatsapp.com/send?phone=917898744884"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <small className="form__status form__status--success" role="status">
              Thanks! Your message has been sent.
            </small>
          )}
          {status === "error" && (
            <small className="form__status form__status--error" role="alert">
              Something went wrong. Please email me directly instead.
            </small>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
