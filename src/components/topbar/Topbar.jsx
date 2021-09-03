import "./topbar.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbar">
              <div className="topbarLeft">

              <ul className="topbarList">

                  <li className="topbarListItem">
                  <Link className="topBarLinks" to="/">HOME</Link>
                  </li>
                  {/* <li className="topbarListItem">
                    <Link className="topBarLinks" to="/about">ABOUT</Link>
                    </li>
                  <li className="topbarListItem">
                  <Link className="topBarLinks" to="/contact">CONTACT</Link>
                  </li> */}
                  <li className="topbarListItem">
                    <Link className="topBarLinks" to="/write">CREATE POST</Link>
                    </li>
                    <li className="topbarListItem">
                  <Link className="topBarLinks"to="/login">LOGIN</Link>
                  </li>
                  <li className="topbarListItem">
                  <Link className="topBarLinks"to="/logout">LOGOUT</Link>
                  </li>
              </ul>
           </div>
           
           <div className="topbarCenter">
            
             
           </div>
           
           {/* <div className="topbarLeft">
            <i className="topbarIcon fab fa-facebook-square"></i>
            <i className="topbarIcon fab fa-linkedin"></i>
            <i className="topbarIcon fab fa-twitter-square"></i>
            <i className="topbarIcon fab fa-github-square"></i>
           </div> */}
         
           <div className="topbarRight"></div>
           <img
           className="topbarImg"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0l7rJPUJqE_6sdra0fkLahBUxq2h2bqj3g&usqp=CAU" alt="" />
           <i className="topbarSearchIcon fas fa-search" ></i>
           
           <div>
           <form className="searchInput">
  <label>
    <input className="inputTextArea" type="text" name="Search" />
  </label>
</form>
           </div>
           
        </div>
    )
}
