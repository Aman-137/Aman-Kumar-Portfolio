import React from "react";
import AmanKumar from "../../assets/Aman-Kumar.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={AmanKumar} download="Aman-Kumar.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
