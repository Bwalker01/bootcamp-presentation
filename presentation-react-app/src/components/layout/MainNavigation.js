import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Presentation Cohort 2021</Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/coreskills">CORE</Link>
          </li>
          <li>
            <Link to="/codingskills">CODING</Link>
          </li>
          <li>
            <Link to="/bestpractices">BEST PRACTICES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
