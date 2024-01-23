import style from "../../styles/destination.module.css";

export default function Moon() {
  return (
    <div className={style.destinations}>
      <div className="">
        <img src="/src/assets/destination/image-moon.png" />
      </div>
      <div className={style.destinationsText}>
        <h5 className={style.destinationsTitle}>MOON</h5>
        <p className={style.destinationsTexts}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.,
        </p>
        <hr className={style.dhr}></hr>
        <div className={style.distance}>
          <div>
            <h5>AVG. DISTANCE</h5>
            <p>384,400 KM</p>
          </div>
          <div>
            <h5>Est. Travel Time</h5>
            <p>3 DAYS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
