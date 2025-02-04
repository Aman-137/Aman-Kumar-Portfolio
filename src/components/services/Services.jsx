import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing & Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UX Optimization</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Application Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Browser Compatibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Feature Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code Optimization & Refactoring</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Open-Source Contribution</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bug Fixes & Enhancements</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Feature Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Documentation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Community Collaboration</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
