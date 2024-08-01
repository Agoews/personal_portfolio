import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "OptionTradeTracker.com",
      date: "Jan 2024 - Present",
      details: [
        "Architected the design and led development of a full stack application from Figma to a CI/CD pipeline on Vercel",
        "Developed API endpoints with a Postgres backend for data storage and management, implementing OAuth2.0 for secure user authentication and seamless account creation",
        "Delivered data and calculations for decision making via intuitive UI with TypeScript, React, and Tailwind",
      ],
    },
    // Add other experiences here
  ];

  return (
    <section className="text-gray-400 mb-8 min-h-screen ">
      <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">
            {exp.title} - {exp.company}
          </h3>
          <p className="text-gray-600 mb-2">{exp.date}</p>
          <ul className="list-disc list-inside">
            {exp.details.map((detail, i) => (
              <li key={i} className="text-gray-700">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
