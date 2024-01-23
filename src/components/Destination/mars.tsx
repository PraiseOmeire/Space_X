import style from "../../styles/destination.module.css";

export default function Mars() {
  return (
    <div className={style.destinations}>
      <div className="">
        <img src="/src/assets/destination/image-mars.png" />
      </div>
      <div className={style.destinationsText}>
        <h5 className={style.destinationsTitle}>Mars</h5>
        <p className={style.destinationsTexts}>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>
        <hr className={style.dhr}></hr>
        <div className={style.distance}>
          <div>
            <h5>AVG. DISTANCE</h5>
            <p>225 mil. km</p>
          </div>
          <div>
            <h5>Est. Travel Time</h5>
            <p>9 months</p>
          </div>
        </div>
      </div>
    </div>
  );
}
