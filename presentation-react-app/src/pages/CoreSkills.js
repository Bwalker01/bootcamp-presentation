import SlideList from "../components/blogs/SlideList";
import { array } from "../components/slides/CoreSkillsSlides";
import classes from "./SlideStyle.module.css";

const CoreSkills = () => {
  return (
    <section>
      <h1>CORE SKILLS</h1>
      <SlideList slides={array} />
    </section>
  );
};

export default CoreSkills;
