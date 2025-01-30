import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        AMAN KUMAR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://linkedin.com/aman137"
          target="_blank"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Aman-137"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aman Kumar. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
