import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { name: "HTML & CSS", level: "Experienced" },
  { name: "JavaScript", level: "Experienced" },
  { name: "TypeScript", level: "Experienced" },
  { name: "React JS", level: "Experienced" },
  { name: "Next JS", level: "Experienced" },
  { name: "Tailwind CSS", level: "Experienced" },
  { name: "Redux Toolkit", level: "Intermediate" },
  { name: "MUI & shadcn/ui", level: "Intermediate" },
];

const backendSkills = [
  { name: "Node JS", level: "Intermediate" },
  { name: "Express JS", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "REST & GraphQL", level: "Experienced" },
  { name: "LLM Integration", level: "Experienced" },
  { name: "AI Agents", level: "Experienced" },
  { name: "Git & GitHub", level: "Experienced" },
  { name: "Docker & CI/CD", level: "Intermediate" },
];

const SkillList = ({ skills }) => (
  <div className="experience__content">
    {skills.map((skill) => (
      <article key={skill.name} className="experience__details">
        <BsPatchCheckFill className="experience__details-icon" />
        <div>
          <h4>{skill.name}</h4>
          <small className="text-light">{skill.level}</small>
        </div>
      </article>
    ))}
  </div>
);

const Experience = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <SkillList skills={frontendSkills} />
        </div>
        <div className="experience__backend">
          <h3>Backend, AI &amp; Tools</h3>
          <SkillList skills={backendSkills} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
