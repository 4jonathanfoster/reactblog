import "../post/post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFCvBzAMlw8kr5_JWq5TkHp6zgQMh2w-mEA&usqp=CAU" alt="" />
        <div className="postinfo">
            <div className="postcats">
            <span className="postCat">Interview Questions</span>
            <span className="postCat">Algo Review</span>
            </div>
            <span className="postTitle">Technology by its very nature is always evolving, but the pandemic has sparked change at an impressive and escalated rate.</span>
         <hr/>
         <span className="postDate">1 hour ago</span>
         </div>
        </div>

    )
}
