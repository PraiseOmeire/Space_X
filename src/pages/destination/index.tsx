// import {Link} from "react-router-dom";
import {useState} from "react";
import Navigation from "../../components/Navigation";
import style from "../../styles/destination.module.css";
import Mars from "../../components/Destination/mars";
import Moon from "../../components/Destination/moon";
import Europa from "../../components/Destination/europa";
import Titan from "../../components/Destination/titans";

export default function Destination() {
  const [destination, setDestination] = useState(null);

  const handleDestination = (destination: any) => {
    setDestination(destination);
    console.log(destination);
    // const nextDestination = destination + 1;
    // setDestination(destinations);
    // console.log("destination", destination);

    // setDestination(nextDestination);
    // console.log(nextDestination);

    // const selectedData = destinations.find((item) => item.id === object);
    // if (selectedData) {
    //   setDestination(selectedData);
    //   console.log(selectedData);
    // }
  };

  return (
    <div className={style.destinationImg}>
      <Navigation />
      <div className={style.pick}>
        <span className={style.one}>01</span>
        <p className={style.pickText}>Pick your destination</p>
      </div>
      <div className={style.sectionDestination}>
        <div className={style.desHeading}>
          <button onClick={() => handleDestination("moon")}>MOON</button>
          <button onClick={() => handleDestination("mars")}>MARS</button>
          <button onClick={() => handleDestination("europa")}>EUROPA</button>
          <button onClick={() => handleDestination("titan")}>TITAN</button>
        </div>
      </div>{" "}
      <div>
        {destination === "moon" && <Moon />}
        {destination === "mars" && <Mars />}
        {destination === "europa" && <Europa />}
        {destination === "titan" && <Titan />}
      </div>
      <div></div>
    </div>
  );
}
