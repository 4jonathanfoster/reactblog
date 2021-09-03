import "./login.css"





export default function Login() {
    return (
<div className="loginStyle">
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link href="https://fonts.googleapis.com/css2?family=Besley:wght@500&family=Lora:ital@1&family=STIX+Two+Math&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <link rel="stylesheet" href="login.css" />
  <style dangerouslySetInnerHTML={{__html: "*{\n     margin: 0;\n   }" }} />
  <title>TechBlog React App</title>
  <div className="flex-container" id="flexmain">
    <form className="flex-child login-form">
      <h1 className="signTitle">Login</h1>
      <div className="col-auto" id="topfill">
        <input type="text" className="form-control" id="username-login" placeholder="Username" />
      </div>
      <div className="col-auto">
        <input type="password" className="form-control" id="password-login" placeholder="Password" />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary" id="login-btn">Login</button>
      </div>
      <div className="col-auto">
        <p>New here?<span><a className="hyperlink" href="signup"> Sign-Up Here!</a></span></p>
      </div>
    </form>
  </div>
</div>

    )

}
