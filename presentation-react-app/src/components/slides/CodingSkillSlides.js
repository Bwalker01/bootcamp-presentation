import { Slide } from "./Slide";
import TDDLifeCycle from "./SlideImages/TDDLifeCycle.png";
import JavaScriptImage from "./SlideImages/javascript.png";
import GitImage from "./SlideImages/git.png";
import ReactImage from "./SlideImages/react.jpg";

//name, image, keyPoints, description, speaker

export const array = [
  new Slide(
    "JavaScript Fundamentals",
    JavaScriptImage,
    ["Data Structures", "Functions", "Objects", "Dom Manipulation"],
    `A crash course in the fundamentals of Javascript, delivered by Assad Ahmad. This course was designed
    to give us a boost before entering our workplaces on Monday and covered aspects of front-end web development,
    including Data Structures like arrays, function declarations and expressions, JavaScript and JSON objects, and
    Document Object Model Manipulation.`
  ),
  new Slide(
    "Git",
    GitImage,
    ["Version Control System", "Invented by Linus Torvalds"],
    `Git allows a team to track changes to a local repository and, through a connection to a remote repository
    hosted on a website like Github, to work on existing code bases as teams. It allows a team to branch, fork,
    clone and update existing repositories.`
  ),
  new Slide(
    "Test Driven Development",
    TDDLifeCycle,
    ["Has lifecycle", "Focused Testing", "Test first and make it pass"],
    `TDD is a development process which relies on creating code that passes pre-written tests rather than the other
    way round. Our practice with TDD came through Jest, a testing framework designed for JavaScript. TDD encourages
    programmers to write as little code as possible to pass the tests that have been written.`
  ),
  new Slide(
    "React",
    ReactImage,
    ["Single-page apps", "Components", "Props"],
    `React is a framework created for front-end web-development by Facebook and other community contributors. With React,
    you can create components which use JSX to return react Elements. These Elements allow us to use HTML to format our
    web-page using JS syntax. The end result is a web app that uses only a single HTML page to render all the pages and
    components of the website.`
  ),
];
