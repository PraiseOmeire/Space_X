import style from "../../styles/destination.module.css";

export default function Titan() {
  return (
    <div className={style.destinations}>
      <div className="">
        <img src="/src/assets/destination/image-titan.png" />
      </div>
      <div className={style.destinationsText}>
        <h5 className={style.destinationsTitle}>Titan</h5>
        <p className={style.destinationsTexts}>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <hr className={style.dhr}></hr>
        <div className={style.distance}>
          <div>
            <h5>AVG. DISTANCE</h5>
            <p>6 bil. km</p>
          </div>
          <div>
            <h5>Est. Travel Time</h5>
            <p>7 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
