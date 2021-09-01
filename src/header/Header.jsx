import "../header/header.css"

export default function Header() {
    return (
        <div className="head">
           <div className="headLeft">
            <i className="headIcon fab fa-facebook-square"></i>
            <i className="headIcon fab fa-linkedin"></i>
            <i className="headIcon fab fa-twitter-square"></i>
            <i className="headIcon fab fa-github-square"></i>
           </div>
           <div className="headCenter">
              <ul className="headList">
                  <li className="headListItem">HOME</li>
                  <li className="headListItem">ABOUT</li>
                  <li className="headListItem">CONTACT</li>
                  <li className="headListItem">WRITE</li>
                  <li className="headListItem">LOGOUT</li>
              </ul>
           </div>
           <div className="headRight"></div>
           <img
           className="headImg"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0l7rJPUJqE_6sdra0fkLahBUxq2h2bqj3g&usqp=CAU" alt="" />
           <i className="headSearchIcon fas fa-search"></i>
        </div>
    )
}
