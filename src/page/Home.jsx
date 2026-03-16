import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../component/common/About";
import Skills from "../component/common/Skills";
import Contact from "../component/common/Contact";
import Project from "./Projects";

const Home = () => {

  const location = useLocation();
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }

    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
