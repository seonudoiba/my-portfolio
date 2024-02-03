import React from "react";
import Hero from "../components/Hero/Hero.js";
import About from "../components/About/About.js";
import Service from "../components/Service/Service.js";
import Project from "../components/Project/Project.js";
import Contact from "../components/Contact/Contact.js";
import Articles from "../components/articles/Articles.jsx";

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Project />
      <Articles />
      <Contact />
    </div>
  );
}

export default HomePage;
