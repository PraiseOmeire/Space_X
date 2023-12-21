import {Link} from "react-router-dom";
import {GiStarShuriken} from "react-icons/gi";
import styles from "./nav.module.css";

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <div className={styles.iconBorder}>
        <GiStarShuriken className={styles.icon} />
      </div>

      <div className={styles.navLinkDiv}>
        <Link to="/" className={styles.navLink}>
          00 HOME
        </Link>
        <Link to="/destination" className={styles.navLink}>
          01 DESTINATION
        </Link>{" "}
        <Link to="/crew" className={styles.navLink}>
          02 CREW
        </Link>{" "}
        <Link to="/technology" className={styles.navLink}>
          03 TECHNOLOGY
        </Link>
      </div>
    </div>
  );
}
