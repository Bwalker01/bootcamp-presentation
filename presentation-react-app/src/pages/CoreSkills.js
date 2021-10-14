import SlideList from "../components/blogs/SlideList";
import { array } from "../components/slides/CoreSkillsSlides";

const CoreSkills = () => {
  return (
    <section>
      <h1>Our Core Skills</h1>
      <SlideList slides={array} />
    </section>
  );
};

export default CoreSkills;
