// import {Link} from "react-router-dom";
import {useState} from "react";
import Navigation from "../../components/Navigation";
import style from "../../styles/destination.module.css";
import {destinations} from "./data";

export default function Destination() {
  const [currentPage, setCurrentPage] = useState("moon");
  return (
    <div className={style.destinationImg}>
      <Navigation />
      <div className={style.grid}>
        <div className={style.gridItem}>
          <span className={style.one}>01</span>
          <p className={style.firstP}>Pick your destination</p>
        </div>
        <div className={style.desHeading}>
          {destinations.map((data, index) => (
            <div className={style.desTitle} key={index}>
              <a>{data.name}</a>
              {/* <div> {data.name && data.moonDescription}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
