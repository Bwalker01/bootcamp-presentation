import { Slide } from "./Slide";
import AgileMethodology from "./SlideImages/agile-methodology.jpg";
import PersonalBrand from "./SlideImages/personal-brand.PNG";
import Resilience from "./SlideImages/resilience.png";
import Communication from "./SlideImages/communication.png";
//name, image, keyPoints, description, speaker

export const array = [
  new Slide(
    "Agile Methodology",
    AgileMethodology,
    ["Framework", "Feedbcak Loop", "12 Principles", "4 Values"],
    `Agile is a framework/methodology around the lifecycle of work. The agile manifesto is made up of 12 principles and 4 values.
    The idea around Agile is to improve the feedback loop, to allow 
    Often work in sprints of two-three weeks, having a daily stand-up each morning where you can ask for help, discuss which tickets you are currently working on,
    What blockers you have and this again reduces the time to receive feedback.`,
    "Caz Farrell"
  ),
  new Slide(
    "Personal Brand",
    PersonalBrand,
    ["Online presence", "Document Journey"],
    `Building up your personal brand is important, this is around having an online presence, and documenting your coding journey.
    There are many different platforms that you can do this, for example: Linkedin, Twitter, Instagram. How to deal with imposter syndrome,
    A common trait, make sure to make note of what you have learnt and done for all the little wins.
    `,
    "YusufCodes & Parul Singh"
  ),
  new Slide(
    "Resilience",
    Resilience,
    ["Resilience", "Performance", "Wellbeing"],
    `The People and events that happen to us don't rock our resilience, our attitude and view of the events do. During our resilience
    workshop, we discussed what exactly resilience meant to us and when we would need to use it in our lives. We each have power over our
    reactions and lives. Remembering that is an important part of maintaining resilience.`,
    "Sarah Brookes-Pierce"
  ),
  new Slide(
    "Communication & Influence",
    Communication,
    ["Know your audience", "Be clear and confident", "Ask questions"],
    `Communication is key in the world of software development. During our communication
    workshop we discussed how to leverage our own communication styles in the world of work, leading to clearer,
    more efficient communication.`,
    "Amelia Bampton"
  ),
];
