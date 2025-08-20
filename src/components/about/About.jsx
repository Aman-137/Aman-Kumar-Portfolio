import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaUser } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            I'm a Frontend Engineer with 1.5+ years of work experience and 2
            years of relevant experience in React, Next.js, TypeScript, and
            Tailwind CSS. I specialize in UI/UX, accessibility, and performance
            optimization, delivering 10+ projects for 8+ clients worldwide. My
            work includes websites, e-commerce platforms, admin dashboards, and
            payment integrations. Passionate about building seamless and
            high-performance web experiences. 🚀
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
