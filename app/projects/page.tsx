import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Full Stack Developer - CupQuest App Project",
      organization: "Hack Reactor",
      date: "June 2023",
      details: [
        "Streamlined user authentication process by creating a Firebase based microservice for user login and authentication",
        "Optimized database queries by collecting and passing React Router user state between separate pages",
        "Maintained continuous integration and deployment through CircleCI while tracking project progress using Agile methodologies and Trello",
      ],
    },
    // Add other projects here
  ];

  return (
    <section className="text-gray-500 mb-8">
      <h2 className="text-2xl font-bold mb-4">Project Experience</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-700 mb-2">
            {project.organization} | {project.date}
          </p>
          <ul className="list-disc list-inside">
            {project.details.map((detail, i) => (
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

export default Projects;
