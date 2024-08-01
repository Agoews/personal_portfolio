import React from "react";

const Skills = () => {
  const skills = {
    "Front-End": [
      "Typescript",
      "Javascript",
      "JQuery",
      "React",
      "React Router",
      "HTML",
      "CSS",
    ],
    "Back-End": [
      "Python",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "Node.js",
      "Express.js",
      "Axios",
      "RESTful API Development",
    ],
    "Testing / Deployment": [
      "Jest",
      "Mocha & Chai",
      "K6",
      "Lighthouse",
      "CI/CD",
      "AWS: EC2 / ELB",
      "Firebase",
      "New Relic",
    ],
    "Developer Tools": [
      "ServiceNow",
      "Snowflake",
      "NextJS",
      "Vercel",
      "Vim",
      "Git",
      "npm",
      "pnpm",
      "Webpack",
      "Babel",
      "Agile",
      "Scrum",
      "Vite",
      "Django",
    ],
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{category}</h3>
          <p className="text-gray-700">{skillList.join(", ")}</p>
        </div>
      ))}
    </section>
  );
};

export default Skills;
