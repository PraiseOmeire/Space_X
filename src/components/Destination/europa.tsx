import style from "../../styles/destination.module.css";

export default function Europa() {
  return (
    <div className={style.destinations}>
      <div className="">
        <img src="/src/assets/destination/image-europa.png" />
      </div>
      <div className={style.destinationsText}>
        <h5 className={style.destinationsTitle}>Europa</h5>
        <p className={style.destinationsTexts}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <hr className={style.dhr}></hr>
        <div className={style.distance}>
          <div>
            <h5>AVG. DISTANCE</h5>
            <p>628 mil. km</p>
          </div>
          <div>
            <h5>Est. Travel Time</h5>
            <p>3 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
