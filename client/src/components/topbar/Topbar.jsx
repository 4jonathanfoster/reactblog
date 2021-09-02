import "./topbar.css"
import React, { useState } from "react";
import {Link} from 'react-router-dom';

export default function Topbar() {
    const [loggin, setDone] = useState(false);

    return (
        <div className="topbar">
              <div className="topbarLeft">
              <ul className="topbarList">
                  <li className="topbarListItem">HOME</li>
                  <li className="topbarListItem">ABOUT</li>
                  <li className="topbarListItem">CONTACT</li>
                  <li className="topbarListItem">WRITE</li>
                  {!loggin ? (
                    <li className="headListItem"> <Link className="waves-effect waves-light btn modal-trigger" to = "/signup">SignUp</Link>
                    </li>
                  ) : (
                    <li className=" headListItem">LOGOUT</li>
                  )}
              </ul>
           </div>
           <div className="topbarCenter">   
           </div>
         
           <div className="topbarRight"></div>
           <img
           className="topbarImg"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0l7rJPUJqE_6sdra0fkLahBUxq2h2bqj3g&usqp=CAU" alt="" />
           <i className="topbarSearchIcon fas fa-search"></i>
           
        </div>
    )
}
