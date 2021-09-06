import "./header2.css"

export default function Header2() {
    return (
        <div className="header2">
            <div className="header2Titles">
            <span className="header2TitlesLg">TechBlog</span>
            <span className="header2TitlesSm">React & Node</span>
               
            </div>
            <img 
            className="header2Img" 
            src="https://images.pexels.com/photos/5475752/pexels-photo-5475752.jpeg?cs=srgb&dl=pexels-anthony-shkraba-5475752.jpg&fm=jpg" 
            alt=""/>
            {/* <img 
            className="header2Img" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mdHLpRjpskTb3UXdYVGeVr4PGQGFMQfxkA&usqp=CAU" 
            alt=""/> */}
        </div>
    );
}
