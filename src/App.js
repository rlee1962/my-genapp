import jsonStore from "./components/common/jsonsStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/sections/navigation";
import SmoothScroll from "smooth-scroll";
import { Form01 } from "./components/sections/form01";
import { Form02 } from "./components/sections/form02";
import { Form03 } from "./components/sections/form03";
import { Form04 } from "./components/sections/form04";
import { Form05 } from "./components/sections/form05";
import { Form06 } from "./components/sections/form06";
import { Form07 } from "./components/sections/form07";
import { Form08 } from "./components/sections/form08";
import { Form09 } from "./components/sections/form09";
import { Form010 } from "./components/sections/form10";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
console.log(jsonStore);

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/form01" exact>
            <Form01 />
          </Route>
          <Route path="/form02" exact>
            <Form02 />
          </Route>
          <Route path="/form03" exact>
            <Form03 />
          </Route>
          <Route path="/form04" exact>
            <Form04 />
          </Route>
          <Route path="/form05" exact>
            <Form05 />
          </Route>
          <Route path="/form06" exact>
            <Form06 />
          </Route>
          <Route path="/form07" exact>
            <Form07 />
          </Route>
          <Route path="/form08" exact>
            <Form08 />
          </Route>
          <Route path="/form09" exact>
            <Form09 />
          </Route>
          <Route path="/form010" exact>
            <Form010 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
