// import HomeImg from "../../assets/home/bg-h-d.jpg";
import Navigation from "../../components/Navigation";
import styles from "../../styles/home.module.css";
import "../../index.css";

export default function Home() {
  return (
    <div>
      <div className={styles.homeImg}>
        <Navigation />
        <div className={styles.body}>
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <div className={styles.explore}>
            {" "}
            <p className={styles.homeText}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
            <div className={styles.circle}>
              <p className={styles.circleText}>EXPLORE</p>
            </div>
          </div>
        </div>
        {/* <div className={styles.button}></div> */}
      </div>
    </div>
  );
}
