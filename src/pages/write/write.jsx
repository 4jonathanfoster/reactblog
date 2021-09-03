import "../../pages/write/write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg"
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D245369078971853&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fharvardwecode%2F&tbnid=fqdhbAZ2FbENDM&vet=12ahUKEwi42NqbkOPyAhXBVawKHRcKC4YQMygJegUIARDcAQ..i&docid=oy0nJeHK0yC34M&w=2048&h=2048&q=code&ved=2ahUKEwi42NqbkOPyAhXBVawKHRcKC4YQMygJegUIARDcAQ" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"></label>
                    <i className="writeIcon fas fa-plus"></i>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title"className="writeInput" autoFocus={true}/>
                </div>
                <div className= "writeFormGroup">
                    <textarea placeholder="Add code problems ..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">publish</button>
                 </form>
        </div>
    )
}
