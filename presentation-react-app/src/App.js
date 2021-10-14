import { Route, Switch } from "react-router-dom";

// bring in pages:
import IntroPage from "./pages/IntroPage";
import CoreSkills from "./pages/CoreSkills";
import CodingPage from "./pages/Coding";
import BestPractices from "./pages/BestPractices";

// Layout:
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
        </Route>
        <Route path="/coreskills">
          <CoreSkills />
        </Route>
        <Route path="/codingskills">
          <CodingPage />
        </Route>
        <Route path="/bestpractices">
          <BestPractices />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
