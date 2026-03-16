import styles from "../component/other/ProjectContent.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectContent from "../component/other/ProjectContent";

const Project = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
          easing: "ease-in-out"
        });
      }, []);
    return (
        <section className={styles.projectSection}>
            <h2 className="text-center mb-5" data-aos="zoom-in">My Projects</h2>
            <ProjectContent />
        </section>
    );
};

export default Project;
