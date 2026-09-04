import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    items: [
      "Responsive Web Applications",
      "Design Systems & Reusable Components",
      "State Management & Data Fetching",
      "Performance Optimization",
      "Accessibility & Cross-Browser Support",
    ],
  },
  {
    id: 2,
    title: "Backend & API Development",
    items: [
      "REST & GraphQL API Design",
      "Authentication & Session Security",
      "PostgreSQL Schema & Query Tuning",
      "Payment Gateway Integration",
      "Automation & Reporting Pipelines",
      "CI/CD & Deployment",
    ],
  },
  {
    id: 3,
    title: "AI Integration",
    items: [
      "LLM API Integration",
      "Streaming Responses & Tool Calling",
      "Multi-Agent Query Interfaces",
      "Speech Recognition & Voice Input",
      "AI-Powered Reporting & Insights",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services.map((service) => (
          <article key={service.id} className="service">
            <div className="service__head">
              <h3>{service.title}</h3>
            </div>
            <ul className="service__list">
              {service.items.map((item) => (
                <li key={item}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
