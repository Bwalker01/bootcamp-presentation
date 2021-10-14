import React from "react";
import Card from "../ui/Card";
// import KeyPoints from "./KeyPoints";

import classes from "./SlideItem.module.css";
//name, image, keyPoints, description, speaker

const SlideItem = ({ name, image, keyPoints, description, speaker }) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={name} />
        </div>

        <div className={classes.content}>
          <h3>{name}</h3>
          <h4>{speaker}</h4>
          <ul className={classes.list}>
            {keyPoints.map((element) => {
              return <li>{element}</li>;
            })}
          </ul>
          <p>{description}</p>
        </div>
      </Card>
    </li>
  );
};

export default SlideItem;
