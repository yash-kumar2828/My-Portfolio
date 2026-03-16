import styles from "./About.module.css";
import Image from "../../assets/boy.png";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const About = () => {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section id="about" style={{ background: "linear-gradient(120deg,#141e30,#243b55,#1b2735)", }}>
        <div className={`container-lg ${styles.aboutPortfolio}`}>
          <div>
            <div ref={(el) => (refs.current[0] = el)} className={`${styles.portfolioContent}  ${styles["from-left"]}`}>
              <h1>Yash Kumar</h1>
              <h3>
                I am a{" "}
                <span style={{ color: "green" }}>
                  <ReactTyped
                    strings={[
                      "BCA Student",
                      "Frontend Developer",
                      "UI Designer"
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                  />
                </span>
              </h3>
              <p>I am a passionate Web Developer with a strong foundation in HTML, CSS, Bootstrap, Tailwind CSS, and React JS. I enjoy building responsive and user-friendly websites and continuously learning new technologies to improve my skills.</p>
           

            <div className={styles.socialMedia}> 
              <div className={styles.social}>
                <Link to="https://www.linkedin.com/in/Yash-kumar2804/"><FaLinkedin className={styles.socialLinks} /></Link>
              </div>
              <div className={styles.social}>
                <Link to="https://github.com/yash-kumar2828"><FaGithub className={styles.socialLinks} /></Link>
              </div>
              <div className={styles.social}>
                <Link to=""><FaWhatsapp className={styles.socialLinks} /></Link>
              </div>
            </div>
            <button className={styles.downloadButton}><Link to="/YashResume.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadLinks}>Resume</Link></button>
          </div>
           </div>
          <div>
            <div ref={(el) => (refs.current[1] = el)} className={`${styles.portfolioImage} ${styles["from-right"]}`}>
              <img src={Image} alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
