import "../sidebar/sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT TECH</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRgjJ_nNG8oDmSYt5PODIZI-o7k036FHv4A&usqp=CAU" alt="" />  
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ode!</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Interview</li>
                <li className="sidebarListItem">Algo</li>
                <li className="sidebarListItem">Questions</li>
                <li className="sidebarListItem">Questions</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">News</li>
            
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-linkedin"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-github-square"></i>
            </div>

            </div>
        </div>
    )
}
