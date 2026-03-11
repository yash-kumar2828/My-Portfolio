import styles from "./Footer.module.css";
import {FaCopyright} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.developerInfo}>
          <div className={`container-lg ${styles.developer}`}>
            <div className={styles.developerDetail}>
              <span>
                <i className="fas fa-copyright text-light me-2"></i>
                <FaCopyright /> 2026 Yash Kumar Portfolio. All rights reserved.{" "}
              </span>
            </div>
            <div className={styles.developerDetail}>
              <span>Designed & Developed by Yash Kumar</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
