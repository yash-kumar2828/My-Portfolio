import React from 'react'
import styles from "./ProjectContent.module.css";
import HomePage2 from "../../assets/CMS/HomePage.png";
import StudentFormPage from "../../assets/CMS/StudentFormPage.png";
import FeedbackPage from "../../assets/CMS/FeedbackPage.png";
import StudentLoginPage from "../../assets/CMS/StudentLoginPage.png";
import StudentDashboard from "../../assets/CMS/StudentDashboard.png";
import StudentProfile from "../../assets/CMS/StudentProfile.png";
import StudentResult from "../../assets/CMS/StudentResult.png";
import FacultyLoginPage from "../../assets/CMS/FacultyLoginPage.png";
import FacultyDashboard from "../../assets/CMS/FacultyDashboard.png";
import FacultyProfile from "../../assets/CMS/FacultyProfile.png";
import FacultyResult from "../../assets/CMS/FacultyResult.png";
import AdminLoginPage from "../../assets/CMS/AdminLoginPage.png";
import AdminDashboard from "../../assets/CMS/AdminDashboard.png";
import { Link } from 'react-router-dom';


const SecondProject = () => {
    return (
        <>
            <div className={styles.manyProjects}>
                <div class={`card ${styles.projectCard}`}>
                    <div class="card-body">
                        <h5 class="card-title">College Management System</h5>
                        <h6 class={`card-subtitle mb-2  ${styles.tech}`}>React • Bootstrap  • Node JS • Express JS • MongoDB  </h6>
                        <p class="card-text">College Management System is a full-stack web application that simplifies college operations such as student admission, result management, fee status, and course management. The system provides separate dashboards for students, faculty, and admin to manage academic activities effectively.</p>
                        <ul>
                            <li>Online student admission system</li>
                            <li>Student dashboard (fees, results, notices)</li>
                            <li>Faculty panel to upload results</li>
                            <li>Admin panel to manage courses, syllabus, and notices</li>
                            <li>Contact system for student queries</li>
                        </ul>
                        <div className={styles.btns}>
                            <Link to="#">Live Demo</Link>
                            <Link to="https://github.com/yash-kumar2828/College-Management-System.git">GitHub</Link>
                        </div>
                    </div>
                </div>
                <div id="carouselExample" class="carousel slide">
                    <h4 className="text-center mb-5 text-light" style={{ 'padding': '2rem 0' }}>Projects Image</h4>
                    <div class={`carousel-inner ${styles.projectImages}`}>
                        <div class="carousel-item active">
                            <img src={HomePage2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={StudentFormPage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={FeedbackPage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={StudentLoginPage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={StudentDashboard} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={StudentProfile} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={StudentResult} class="d-block w-100" alt="..." />
                        </div>
                         <div class="carousel-item">
                            <img src={FacultyLoginPage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={FacultyDashboard} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={FacultyProfile} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={FacultyResult} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={AdminLoginPage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={AdminDashboard} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SecondProject
