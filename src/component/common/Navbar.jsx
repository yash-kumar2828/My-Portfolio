import styles from "./Navbar.module.css";
import { Link, useLocation, useNavigate} from "react-router-dom";

const Navbar=()=> {

  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg sticky-top ${styles.navbarContent}`}>
        <div className="container-fluid">
          <div className={styles.logo}>
            <Link to="/"><span style={{'color':'#38bdf8'}}>Yash</span> Kumar</Link>
          </div>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/" className={`nav-link active ${styles.navLink}`}>Home</Link></li>
                <li className="nav-item"><Link to="/" className={`nav-link active ${styles.navLink}`} onClick={(e) => scrollToSection(e, "about")}>About</Link></li>
                <li className="nav-item"><Link to="" className={`nav-link active ${styles.navLink}`} onClick={(e)=>scrollToSection(e,"skills")}>Skills</Link> </li>
                <li className="nav-item"><Link to="" className={`nav-link active ${styles.navLink}`} onClick={(e) => scrollToSection(e, "projects")}>Projects</Link></li>
                <li className="nav-item"><Link to="/" className={`nav-link active ${styles.navLink}`} onClick={(e) => scrollToSection(e, "contact")}>Contact</Link></li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
