import ProfileCard from "./ProfileCard";
import classes from "./IntroPage.module.css";
import RamiPhoto from "./profile-images/rami-photo.jpg";
import BenPhoto from "./profile-images/ben-photo.jpg";
import KallumPhoto from "./profile-images/kallum-photo.png";

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
          <ProfileCard
            image={BenPhoto}
            name={"Ben Walker"}
            description={"Tech enthusiast a with love of LEDs."}
            job={"BJSS, Leeds"}
          />
        </div>
        <div className={classes.thisCard}>
          <ProfileCard
            image={KallumPhoto}
            name={"Kallum Jones"}
            description={"Boardgame and cat enthusiast."}
            job={"AutoTrader, Manchester"}
          />
        </div>
        <div className={classes.thisCard}>
          <ProfileCard
            image={RamiPhoto}
            name="Rami Yasir"
            description={"Utter nerd, good with a pen."}
            job={"BJSS, Manchester"}
          />
        </div>
      </div>

      {/* this is a comment */}
    </section>
  );
};

export default IntroPage;
