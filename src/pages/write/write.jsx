import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon far fa-plus-square"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
              <div className="writeFormGroup">
                  <textarea 
                  placeholder="What's the tea???" 
                  type="text" 
                  className="writeInput writeText"
                  ></textarea>
                  </div> 
                  <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}