import React from "react";
import SlideItem from "./SlideItem";

import classes from "./SlideList.module.css";

const SlideList = ({ slides }) => {
  return (
    <ul className={classes.list}>
      {slides.map((slide) => {
        // destructure each blog:
        const { name, image, keyPoints, description, speaker } = slide;

        return (
          <SlideItem
            image={image}
            name={name}
            description={description}
            keyPoints={keyPoints}
            speaker={speaker}
          />
        );
      })}
    </ul>
  );
};

export default SlideList;
