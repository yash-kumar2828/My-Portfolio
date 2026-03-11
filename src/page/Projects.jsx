import styles from "../component/other/ProjectContent.module.css";
import FirstProject from "../component/other/FirstProject";
import SecondProject from "../component/other/SecondProject";

const Project = () => {
    return (
        <section className={styles.projects}>
            <h2 className="text-center mb-5">My Projects</h2>
            <FirstProject />
            <SecondProject />
        </section>
    );
};

export default Project;
