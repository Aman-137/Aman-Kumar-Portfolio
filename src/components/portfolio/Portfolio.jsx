import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/The Store.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/Mytube.png";
import IMG4 from "../../assets/cryptoverse.png";
import IMG5 from "../../assets/zerocross.png";
import IMG6 from "../../assets/calci.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Your Ultimate Ecommerce Destination - The Store",
    github: "https://github.com/Aman-137/The-Store",
    demo: "https://the-store-sepia.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Collaborative Sketching Board - DrawBoard",
    github: "https://github.com/Aman-137/Drawboard",
    demo: "https://drawboard-lime.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Watch, Share, Discover Videos - MyTube(clone)",
    github: "https://github.com/Aman-137/Youtube-Clone",
    demo: "https://clonemytube.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Real time Crypto Data & Insights - Cryptoverse",
    github: "https://github.com/Aman-137/Cryptoverse-app",
    demo: "https://cryptoversee-app.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Classic Strategy, Endless Fun - Tic Tac Toe",
    github:
      "https://github.com/Aman-137/React.js/tree/master/React%20Projects/Tic%20Tac%20Toe",
    demo: "https://cross-zero.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Simplify Your Calculations - CalcMaster",
    github:
      "https://github.com/Aman-137/React.js/tree/master/React%20Projects/Calculator%20App",
    demo: "https://my-react-calci.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item, index) => {
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={item.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
