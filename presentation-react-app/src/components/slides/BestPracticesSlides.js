import { Slide } from "./Slide";
import DontRepeat from "./SlideImages/dont-repeat.png";
import Cases from "./SlideImages/cases.png";
import VSCode from "./SlideImages/vscode.png";
import Positives from "./SlideImages/positives.PNG";

//name, image, keyPoints, description, speaker

export const array = [
  new Slide(
    "Best Practices",
    DontRepeat,
    ["DRY", "KISS", "SOLID"],
    `Don't Repeat Yourself & Keep It Simple Stupid can refer to functions within JavaScript, conveying that 
    where possible, a function should be used to avoid repeating blocks of code within a program, as well as 
    keeping these as simple as possible to avoid redundant code or overcomplications preventing the program from 
    running entirely.
    `
  ),
  new Slide(
    "Naming Conventions",
    Cases,
    ["JavaScript - camelCase", "Classes - Capitalize"],
    `Programming languages tend to have naming conventions for their variables which may vary between developers 
    according to personal preference but JavaScript tends to focus on using camelCase - where the first letter is 
    lowercase and each subsequent word has the first letter capitalized. In most languages classes also tend to be 
    Capitalized for each word and some even use snake_case where words are seperated by an underscore.`
  ),
  new Slide(
    "VS Code Extensions",
    VSCode,
    ["Emmet", "LiveShare", "GitLens"],
    `All good IDEs will allow for the installation of plugins to help with workflow when creating code within them
    and the most can be said for VS Code which offers a wide range of Extensions to help with all aspects of any 
    language. Emmet is a default abbreviation plugin that makes writing HTML much quicker. LiveShare allows multiple 
    users to connect to a single file tree and edit files together within the host's machine. GitLens allows Git 
    commits to be easily seen in files, as well as a blame map and change log to keep easy track of how files have 
    changed (or broken) over time.`
  ),
  new Slide(
    "Three Positives",
    Positives,
    [],
    `At the end of the day or a tough meeting, make sure to write three positives down. 
    This will then reinforce postive connections to meetings/work rather than a negative connection, and allows for a 
    good breakdown of what went well.`,
    "Chris Cazaly"
  ),
];
