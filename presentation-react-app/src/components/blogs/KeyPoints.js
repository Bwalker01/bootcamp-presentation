import React from "react";

const KeyPoints = ({ keyPoint }) => {
  console.log(keyPoint);
  keyPoint.forEach((element) => {
    return <li key={element}>{element}</li>;
  });
};

export default KeyPoints;
