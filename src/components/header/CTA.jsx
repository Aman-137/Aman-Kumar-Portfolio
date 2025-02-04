import React from "react";
import AmanKumar from "../../assets/AmanKumar.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={AmanKumar} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
