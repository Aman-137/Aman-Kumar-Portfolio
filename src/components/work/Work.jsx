import React from "react";
import "./work.css";
import { BsPatchCheckFill } from "react-icons/bs";

const data = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "EcoRatings",
    duration: "Jan 2026 — Present",
    points: [
      "Led end-to-end development of the main application and admin portal, architecting and integrating 40+ REST APIs with backend contributions across authentication, agent orchestration, and data pipelines.",
      "Implemented a secure refresh-token authentication system with silent rotation, request queuing, and automatic session recovery, strengthening protection against token replay and unauthorized access.",
      "Integrated 10+ AI agents into a unified query interface with streaming responses, tool-call handling, and structured output rendering for seamless conversational workflows.",
      "Optimized platform performance through code splitting, lazy loading, list virtualization, and backend query tuning — reducing initial load size by 45% and cutting ESG report generation from 3 minutes to 2 minutes 20 seconds.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "AI Agents",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "OexTech Solutions",
    duration: "Jan 2024 — Sept 2025",
    points: [
      "Created high-performance websites for multiple clients using Next.js, Tailwind CSS, and Strapi CMS — achieving a 100% Lighthouse score, improving speed by 75%, and securing SEO rank 2 on Google.",
      "Integrated Stripe, Razorpay, and PhonePe payment gateways, increasing checkout conversion by 25% and delivering responsive, CMS-driven interfaces with automated sitemaps and reusable components.",
      "Engineered an automated bulk invoice generation system for orders across multiple marketplaces, reducing manual effort by 80% and processing 500+ invoices within minutes.",
      "Developed a UPC-to-product mapping system to automate inventory tracking, eliminating SKU confusion and improving inventory accuracy by 28%.",
      "Integrated Azure Speech Recognition into the AiCodePro chatbot and built interactive product discovery features, reducing user typing time by ~40% and increasing product engagement by 25%.",
    ],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Strapi CMS",
      "Stripe",
      "Razorpay",
      "Azure Speech",
    ],
  },
];

const Work = () => {
  return (
    <section id="work">
      <h5>Where I've Worked</h5>
      <h2>Work Experience</h2>

      <div className="container work__container">
        {data.map((job) => {
          return (
            <article key={job.id} className="work__item">
              <div className="work__item-head">
                <div>
                  <h3 className="work__role">{job.role}</h3>
                  <h4 className="work__company">{job.company}</h4>
                </div>
                <span className="work__duration">{job.duration}</span>
              </div>

              <ul className="work__list">
                {job.points.map((point, index) => (
                  <li key={index}>
                    <BsPatchCheckFill className="work__list-icon" />
                    <p>{point}</p>
                  </li>
                ))}
              </ul>

              <div className="work__stack">
                {job.stack.map((tech) => (
                  <span key={tech} className="work__tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
