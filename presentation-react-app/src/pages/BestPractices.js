import SlideList from "../components/blogs/SlideList";
import { array } from "../components/slides/BestPracticesSlides";

const BestPractices = () => {
  return (
    <section>
      <h1>Best Practices</h1>
      <SlideList slides={array} />
    </section>
  );
};

export default BestPractices;
