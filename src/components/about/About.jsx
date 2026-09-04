import React from "react";
import "./about.css";
import ME from "../../assets/Aman-2.png";
import { FaAward, FaUser } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div
            className="about__me-bg"
            style={{ backgroundImage: `url(${ME})` }}
            aria-hidden="true"
          />
          <div className="about__me-image">
            <img src={ME} alt="Aman Kumar" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2.5+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>Clients</h5>
              <small>8+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <div className="about__bio">
            <p>
              I'm a Software Engineer with 2.5+ years building fast, scalable,
              user-focused web applications — from production interfaces and
              design systems to the REST APIs, secure authentication, and AI
              agents behind them.
            </p>
            <p>
              Then I built and launched my own SaaS.{" "}
              <span className="about__highlight">Inertia Leads</span> took me
              from idea → architecture → deployment → launch: an AI-powered B2B
              lead generation platform handling lead discovery, enrichment,
              scoring, personalized outreach, inbox rotation, and campaign
              automation. Going 0→1 pushed me well past the frontend — into
              databases, background jobs, infrastructure, AI workflows, and the
              question every builder eventually faces: will someone actually pay
              for this?
            </p>
            <p>
              It changed how I engineer. I still obsess over the details —
              wasted re-renders, performance budgets, maintainable code — but
              now I also ask how the system scales, what breaks when it fails,
              and whether a feature solves a real problem. That's the engineer
              I'm becoming: deep technically, fluent in the product around the
              code, and able to own the whole arc from idea to launch. 🚀
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
