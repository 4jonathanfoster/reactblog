import React, {useState} from 'react';
import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import "../post/post.css"

export default function Login() {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          //const response = await loginUser(userFormData);
          const { data } = await login({
            variables: { ...userFormData },
          });

          Auth.login(data.login.token);
        } catch (err) {
          console.error(err);
        }
    
        setUserFormData({
          email: '',
          password: '',
        });
      };
    
    return (
    <div className="flex-container" id="flexmain">
        <form className="flex-child login-form" onSubmit={handleFormSubmit}>
            <h1 className="signTitle">Login</h1>
            <div className="col-auto" id="topfill">
                <input type="text" className="form-control" id="email-login" name = "email" onChange={(e) => handleInputChange(e)} value={userFormData.email}></input>
            </div>
            <div className="col-auto">
                <input type="password" className="form-control" id="password-login" placeholder="Password" name = "password" onChange={(e) => handleInputChange(e)} value={userFormData.password}></input>
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