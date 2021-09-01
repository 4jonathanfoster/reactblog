import "../header2/header2.css"

export default function Header2() {
    return (
        <div className="header2">
            <div className="header2Titles">
                <span className="header2TitlesSm">React & Node</span>
                <span className="header2TitlesLg">TechBlog</span>
            </div>
            <img 
            className="header2Img" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mdHLpRjpskTb3UXdYVGeVr4PGQGFMQfxkA&usqp=CAU" 
            alt=""/>
        </div>
    );
}
