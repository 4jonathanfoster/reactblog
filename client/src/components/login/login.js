import "../post/post.css"

export default function login() {
    return (
    <div className="flex-container" id="flexmain">
        <form className="flex-child login-form">
            <h1 className="signTitle">Login</h1>
            <div className="col-auto" id="topfill">
                <input type="text" className="form-control" id="username-login" placeholder="Username"></input>
            </div>
            <div className="col-auto">
                <input type="password" className="form-control" id="password-login" placeholder="Password"></input>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary" id="login-btn">Login</button>
            </div>
            <div className="col-auto">
                <p>New here?<span><a className="hyperlink" href="signup"> Sign-Up Here!</a></span></p>
            </div>
        </form>
    </div>
    )
}