import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.logoLink}>
      КИНО
      <span className={styles.logoText}>ДОМ</span>
    </Link>
  );
}
export default Logo;
