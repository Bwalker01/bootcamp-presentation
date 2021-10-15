import React from "react";
import classes from "./KeyPoints.module.css";

const KeyPoints = ({ keyPointsArray }) => {
  return (
    <ul className={classes.list}>
      {keyPointsArray.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </ul>
  );
};

export default KeyPoints;
