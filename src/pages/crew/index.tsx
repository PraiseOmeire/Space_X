// // import {Link} from "react-router-dom";
// import {useState} from "react";
// import Navigation from "../../components/Navigation";
// import style from "../../styles/destination.module.css";

// export default function Destination() {
//   const [crew, setCrew] = useState(null);

//   const handleCrew = (crew: any) => {
//     setCrew(crew);
//     console.log(crew);
//   };

//   return (
//     <div className={style.destinationImg}>
//       <Navigation />
//       <div className={style.pick}>
//         <span className={style.one}>01</span>
//         <p className={style.pickText}>Pick your destination</p>
//       </div>
//       <div>
//         {crew === "moon" && <Moon />}
//         {crew === "moon" && <Moon />}
//         {crew === "moon" && <Moon />}
//         {crew === "moon" && <Moon />}
//       </div>
//       <div className={style.sectionDestination}>
//         <div className={style.desHeading}>
//           <button onClick={() => handleDestination("moon")}></button>
//           <button onClick={() => handleDestination("mars")}></button>
//           <button onClick={() => handleDestination("europa")}></button>
//           <button onClick={() => handleDestination("titan")}></button>
//         </div>
//       </div>{" "}
//       <div></div>
//     </div>
//   );
// }
