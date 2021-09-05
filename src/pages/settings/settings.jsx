import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"  

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteAccount">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                        src="https://media.istockphoto.com/photos/happy-young-guy-showing-thumbs-up-sign-picture-id151546027?s=612x612"
                        alt="Profile Picture"
                        />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="TeamBlog"/>
                    <label>Email</label>
                    <input type="email" placeholder="TeamBlog@awesome.com"/>
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}