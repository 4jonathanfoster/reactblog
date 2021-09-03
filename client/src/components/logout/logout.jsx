import React from 'react';
import "./logout.css";

export default function Logout() {
    return (
        <div className="logOut">
            <div className="logoutSquare">

           <h1 className="logoutTitle">You have been Logged Out</h1>
          <p className="logMessage">Thanks for using TechBlog!</p>
          <button className="loginButton">Login Again!</button>
          </div>
        </div>
  
    );
}

