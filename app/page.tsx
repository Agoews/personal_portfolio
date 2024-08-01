import React from "react";
import About from "./about/page";
import Education from "./education/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

const Home = () => {
  return (
    <div className="min-h-screen">
      <About />
      <Projects />
    </div>
  );
};

export default Home;
