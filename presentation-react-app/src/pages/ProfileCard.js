import React from "react";
import Card from "../components/ui/Card";

import classes from "./ProfileCard.module.css";
//name, image, keyPoints, description, speaker

const ProfileCard = ({ name, image, description, job }) => {
  return (
    <li className={classes.item} key={name}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={name} />
        </div>

        <div className={classes.content}>
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{description}</p>
        </div>
      </Card>
    </li>
  );
};

export default ProfileCard;
