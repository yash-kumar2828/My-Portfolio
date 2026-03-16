import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectContent.module.css'
import BNMS from '../../assets/BNMS.png'
import CMS from '../../assets/CMS.png'
import { FaCss3Alt, FaBootstrap } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io5";
import { TbFileTypePhp } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const ProjectContent = () => {
    useEffect(() => {
        AOS.init({
          duration: 800, 
          once: true,
          easing: "ease-in-out"
        });
      }, []);
    return (
        <>
                <div className={styles.mainContent}>

                    <div className={`card ${styles.projectCard}`} data-aos="zoom-in-right">
                        <div className={styles.imgContainer}>
                            <img src={BNMS} className={`card-img-top ${styles.projectImage}`} alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">BCA Notes Management System</h5>
                            <p className="card-text">
                                The BCA Notes Management System is a web-based platform designed
                                to help BCA students access subject-wise notes and study materials.
                            </p>
                            <ul>
                                <li>Subject-wise notes</li>
                                <li>Previous year question papers</li>
                                <li>Feedback system</li>
                            </ul>
                            <div className={styles.langBtn}>
                                <div className={styles.languageIcon}>
                                    <IoLogoHtml5 className={styles.langLogo} />
                                    <FaCss3Alt className={styles.langLogo} />
                                    <FaBootstrap className={styles.langLogo} />
                                    <TbFileTypePhp className={styles.langLogo} />
                                </div>
                                <div className={styles.btns}>
                                    <Link to="https://sydreamstudy.free.nf/">Live Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`card ${styles.projectCard}`} data-aos="zoom-in-left">
                        <div className={styles.imgContainer}>
                            <img src={CMS} className={`card-img-top ${styles.projectImage}`} alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">College Management System</h5>
                            <p className="card-text">
                                College Management System is a full-stack web application that
                                simplifies college operations such as student admission, result
                                management, fee status, and course management. The system provides
                                separate dashboards for students, faculty, and admin to manage
                                academic activities effectively.
                            </p>
                            <div className={styles.langBtn}>
                                <div className={styles.languageIcon}>
                                    <RiReactjsLine className={styles.langLogo} />
                                    <FaBootstrap className={styles.langLogo} />
                                    <FaNodeJs className={styles.langLogo} />
                                    <SiExpress className={styles.langLogo} />
                                    <SiMongodb className={styles.langLogo} />
                                </div>
                                <div className={styles.btns}>
                                    <Link to="">Live Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}

export default ProjectContent