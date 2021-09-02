import Home from "../src/pages/home/Home";
import Topbar from "../src/components/topbar/Topbar";

import Single from "../src/pages/single/Single";
import Logout from "./components/logout/Logout.jsx"
import Write from "../src/pages/write/Write"

function App() {
  return (
    <>
    <Topbar />
    {/* <Write />
    <Single/> */}
    <Logout/>
    </>
    
  );
}

export default App;
