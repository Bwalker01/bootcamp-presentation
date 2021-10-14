import { array } from "../components/slides/CodingSkillSlides";
import SlideList from "../components/blogs/SlideList";

const CodingPage = () => {
  return (
    <section>
      <h1>Our Coding Skills</h1>
      <SlideList slides={array} />
    </section>
  );
};

export default CodingPage;
