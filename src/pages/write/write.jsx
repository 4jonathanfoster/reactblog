import "../../pages/write/write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg"
            src="https://wallpapercave.com/wp/wp4020516.png" alt="" />
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
