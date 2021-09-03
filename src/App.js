import Home from "../src/pages/home/Home";
import Topbar from "../src/components/topbar/Topbar";
import Single from "../src/pages/single/Single";
import Logout from "./components/logout/Logout"
import Write from "../src/pages/write/Write"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Settings from "./pages/settings/settings";


function App() {
  // const user = false;
  return (
    <Router>
      <Topbar />
    <Switch>
      <Route exact path="/">
    <Home/>
      </Route>
      <Route path="/logout">
      <Logout/>
      </Route>
      <Route path="/write">
      <Write/>
      </Route>
      <Route path="/single">
      <Single/>
      </Route>
      <Route path="/settings">
      <Settings/>
      </Route>
    
    </Switch>
    </Router>
  );
}

export default App;
