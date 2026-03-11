import { Link } from "react-router-dom";
import styles from "./ProjectContent.module.css";
import HomePage from "../../assets/BNMS/HomePage.png";
import NotesPage from "../../assets/BNMS/Notes.png";
import SemesterPage from "../../assets/BNMS/SemesterPage.png";
import CareerPage from "../../assets/BNMS/CareerPage.png";
import AboutPage from "../../assets/BNMS/AboutPage.png";

const FirstProject = () => {
  return (
    <>
        <div className={styles.manyProjects}>
                <div class={`card ${styles.projectCard}`}>
                    <div class="card-body">
                        <h5 class="card-title">BCA Notes Management System</h5>
                        <h6 class={`card-subtitle mb-2  ${styles.tech}`}>HTML • CSS • Bootstrap • PHP  </h6>
                        <p class="card-text">The BCA Notes Management System is a web-based platform designed to help BCA students access subject-wise notes, previous year question papers, and study materials in one place. It provides an organized and easy way for students to find learning resources quickly.</p>
                        <ul>
                            <li>Subject-wise notes</li>
                            <li>Previous year question papers</li>
                            <li>Feedback system</li>
                        </ul>
                        <div className={styles.btns}>
                            <Link to="https://sydreamstudy.free.nf/">Live Demo</Link>
                            <Link to="https://github.com/yash-kumar2828/BCA-NOTES-MANAGEMENT-SYSTEM.git">GitHub</Link>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <h4 className="text-center mb-5 text-light" style={{ 'padding': '2rem 0' }}>Projects Image</h4>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
                    </div>
                    <div class={`carousel-inner ${styles.projectImages}`}>
                        <div class="carousel-item active">
                            <img src={HomePage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={NotesPage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={SemesterPage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={CareerPage} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={AboutPage} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
    </>
  )
}

export default FirstProject
