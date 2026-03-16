import { IoLogoHtml5 } from "react-icons/io5";
import styles from "./Skills.module.css";
import { FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssLine, RiReactjsLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const skills = [
  { icon: IoLogoHtml5, name: "HTML5", delay: 100 },
  { icon: FaCss3Alt, name: "CSS3", delay: 200 },
  { icon: TbBrandJavascript, name: "JavaScript", delay: 300 },
  { icon: FaBootstrap, name: "Bootstrap", delay: 400 },
  { icon: RiTailwindCssLine, name: "Tailwind CSS", delay: 500 },
  { icon: RiReactjsLine, name: "React JS", delay: 600 },
  { icon: FaGitAlt, name: "Git", delay: 700 },
  { icon: FaGithub, name: "GitHub", delay: 800 },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
      easing: "ease-in-out"
    });
  }, []);
  return (
    <>
      <section id="skills" className={styles.skillsContainer} >
        <div className="container py-4 text-center">
          <h3 className="fw-bold mb-5" data-aos="zoom-in" style={{'color':'#38bdf8'}}>Skills & Technologies</h3>
          <div className="row g-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div className="col-md-4" key={index}>
                  <div className={`shadow-lg text-center p-4 ${styles.skillsCard}`}
                    data-aos="fade-up"
                    data-aos-delay={skill.delay}
                  >
                    <Icon className={styles.skillsLogo} />
                    <h5>{skill.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
