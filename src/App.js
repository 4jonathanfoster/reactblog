import Home from "../src/pages/home/Home";
import Topbar from "../src/components/topbar/Topbar";
import Single from "../src/pages/single/Single";
import Logout from "./components/logout/logout"
import Write from "../src/pages/write/write"


function App() {
  return (
    <>

    <Topbar />
    <Home/>
    <Logout/>
    <Write />
    <Single/>
    
    </>
  );
}

export default App;
