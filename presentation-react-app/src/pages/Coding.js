import { array } from "../components/slides/CodingSkillSlides";
import SlideList from "../components/blogs/SlideList";

const CodingPage = () => {
  return (
    <section>
      <h1>CODING SKILLS</h1>
      <SlideList slides={array} />
    </section>
  );
};

export default CodingPage;
