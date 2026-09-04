import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/inertia-leads.png";
import IMG2 from "../../assets/The Store.png";
import IMG3 from "../../assets/portfolio2.jpg";
import IMG4 from "../../assets/Mytube.png";
import IMG5 from "../../assets/cryptoverse.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "AI-Powered B2B Lead Generation SaaS - Inertia Leads",
    wide: true,
    stack: ["Next.js", "Node.js", "PostgreSQL", "LLM APIs"],
    links: [
      { label: "Live Demo", url: "https://inertialeads.com", primary: true },
    ],
  },
  {
    id: 2,
    image: IMG2,
    title: "Your Ultimate Ecommerce Destination - The Store",
    stack: ["React.js", "Redux", "Stripe"],
    links: [
      { label: "Github", url: "https://github.com/Aman-137/The-Store" },
      {
        label: "Live Demo",
        url: "https://the-store-sepia.vercel.app/",
        primary: true,
      },
    ],
  },
  {
    id: 3,
    image: IMG3,
    title: "Real-Time Collaborative Whiteboard - DrawBoard",
    stack: ["React.js", "Canvas API", "Socket.IO"],
    links: [
      { label: "Github", url: "https://github.com/Aman-137/Drawboard" },
      {
        label: "Live Demo",
        url: "https://drawboard-lime.vercel.app/",
        primary: true,
      },
    ],
  },
  {
    id: 4,
    image: IMG4,
    title: "Watch, Share, Discover Videos - MyTube(clone)",
    stack: ["React.js", "REST API"],
    links: [
      { label: "Github", url: "https://github.com/Aman-137/Youtube-Clone" },
      {
        label: "Live Demo",
        url: "https://clonemytube.netlify.app/",
        primary: true,
      },
    ],
  },
  {
    id: 5,
    image: IMG5,
    title: "Real time Crypto Data & Insights - Cryptoverse",
    stack: ["React.js", "Redux Toolkit", "Chart.js"],
    links: [
      { label: "Github", url: "https://github.com/Aman-137/Cryptoverse-app" },
      {
        label: "Live Demo",
        url: "https://cryptoversee-app.netlify.app/",
        primary: true,
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => {
          const links = item.links.filter((link) => link.url);

          return (
            <article key={item.id} className="portfolio__item">
              <div
                className={
                  item.wide
                    ? "portfolio__item-image portfolio__item-image--wide"
                    : "portfolio__item-image"
                }
              >
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>

              <div className="portfolio__stack">
                {item.stack.map((tech) => (
                  <span key={tech} className="portfolio__tag">
                    {tech}
                  </span>
                ))}
              </div>

              {links.length > 0 && (
                <div className="portfolio__item-cta">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className={link.primary ? "btn btn-primary" : "btn"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
