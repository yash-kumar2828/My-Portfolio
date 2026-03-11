import { IoLogoHtml5 } from "react-icons/io5";
import styles from "./Skills.module.css";
import { FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssLine, RiReactjsLine } from "react-icons/ri";

const Skills = () => {
  return (
    <>
      <section id="skills" className={styles.skillsContainer} >
        <div className="container py-4 text-center">
          <h3 className="fw-bold mb-5">My Skills</h3>
          <div className="row g-4">
            <div className={`col-md-4`}>
              <div className={`shadow-lg text-center p-4 ${styles.skillsCard}`}>
                <IoLogoHtml5 className={styles.skillsLogo} />
                <h5>HTML5</h5>
              </div>
            </div>
            <div className={`col-md-4`}>
              <div className={`shadow-lg text-center p-4 ${styles.skillsCard}`}>
                <FaCss3Alt className={styles.skillsLogo} />
                <h5>CSS3</h5>
              </div>
            </div>
            <div className={`col-md-4`}>
              <div className={`shadow-lg text-center p-4 ${styles.skillsCard}`}>
                <TbBrandJavascript className={styles.skillsLogo} />
                <h5>Java Script</h5>
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`shadow-lg text-center p-4 ${styles.skillsCard}`}>
                <FaBootstrap className={styles.skillsLogo} />
                <h5>Bootstrap</h5>
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`shadow-lg text-center p-4 ${styles.skillsCard}`}>
                <RiTailwindCssLine className={styles.skillsLogo} />
                <h5>Tailwind CSS</h5>
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`shadow-lg text-center p-4 ${styles.skillsCard}`}>
                <RiReactjsLine className={styles.skillsLogo} />
                <h5>React JS</h5>
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`shadow-lg text-center p-4 ${styles.skillsCard}`}>
                <FaGitAlt className={styles.skillsLogo} />
                <h5>Git</h5>
              </div>
            </div>

            <div className={`col-md-4`}>
              <div className={`shadow-lg text-center p-4 ${styles.skillsCard}`}>
                <FaGithub className={styles.skillsLogo} />
                <h5>GitHub</h5>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
