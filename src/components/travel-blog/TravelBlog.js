import React from "react";
import TravelData from "./TravelData.js";
import TravelData_CSS from "./blogcss.css";

const TravelList = () => {
  return (
    <div id="travelListContainer">
      {TravelData.map((item) => (
        <div id={item.placeHeading}>
          <h3>Destination: {item.placeHeading}</h3>
          <img src={item.placeImg1} alt="Image 1" />
          <img src={item.placeImg2} alt="Image 2" />
          <img src={item.placeImg3} alt="Image 3" />
          <p>Description: {item.placeDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
