import React from "react";

const Education = () => {
  const education = [
    {
      institution: "Hack Reactor",
      program: "Software Engineering Program",
      year: "2022 - 2023",
    },
    {
      institution: "CSU Sacramento",
      program: "BS in Electrical Engineering",
      year: "2007 - 2012",
    },
  ];

  const certifications = [
    { name: "ServiceNow Micro-Cert - Flow Designer", year: "2024" },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Education & Certifications</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        {education.map((edu, index) => (
          <p key={index} className="text-gray-700">
            {edu.institution} | {edu.program} | {edu.year}
          </p>
        ))}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Certifications</h3>
        {certifications.map((cert, index) => (
          <p key={index} className="text-gray-700">
            {cert.name} | {cert.year}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Education;
