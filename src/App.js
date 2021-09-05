import Home from "../src/pages/home/Home";
import Topbar from "../src/components/topbar/Topbar";
import Single from "../src/pages/single/Single";
import Login from "../src/components/login/Login";
import Logout from "./components/logout/logout"
import Write from "../src/pages/write/Write"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
      <Route path="/login">
      <Login/>
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
      <Route path="/post/:postId">
        <Single/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
