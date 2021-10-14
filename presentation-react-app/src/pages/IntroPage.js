import SlideItem from "../components/blogs/SlideItem";
import classes from "./IntroPage.module.css";

const IntroPage = () => {
  return (
    <section>
      <h1 className={classes.header}>WELCOME</h1>

      <p className={classes.introText}>
        This is our presentation about the 2021 Bootcamp with Manchester
        Digital.
      </p>

      <h1 className={classes.header}>ABOUT US</h1>
      <div className={classes.cardItems}>
        <div className={classes.thisCard}>
          <SlideItem
            image="https://ca.slack-edge.com/T02DY60092B-U02FT9M11Q8-8b340ff4bf8a-512"
            name={"Ben Walker"}
            description={"Tech enthusiast a with love of LEDs."}
            keyPoints={[]}
            speaker={"BJSS, Leeds"}
          />
        </div>
        <div className={classes.thisCard}>
          <SlideItem
            image=""
            name={"Kallum Jones"}
            description={"Description here"}
            keyPoints={[]}
            speaker={"AutoTrader, Manchester"}
          />
        </div>
        <div className={classes.thisCard}>
          <SlideItem
            image=""
            name={"Rami Yasir"}
            description={"Description here"}
            keyPoints={[]}
            speaker={"BJSS, Manchester"}
          />
        </div>
      </div>

      {/* this is a comment */}
    </section>
  );
};

export default IntroPage;
