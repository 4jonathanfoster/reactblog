import "./topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
              <div className="topbarLeft">
              <ul className="topbarList">
                  <li className="topbarListItem">HOME</li>
                  <li className="topbarListItem">ABOUT</li>
                  <li className="topbarListItem">CONTACT</li>
                  <li className="topbarListItem">WRITE</li>
                  <li className="topbarListItem">LOGOUT</li>
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
           <i className="topbarSearchIcon fas fa-search"></i>
           
        </div>
    )
}
