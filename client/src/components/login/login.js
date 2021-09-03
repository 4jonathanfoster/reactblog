import "../post/post.css"
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


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
        console.log(userFormData);
        const { data } = await login({
          variables: { ...userFormData },
        });
        console.log('data');
        console.log(data);
  
        Auth.login(data.login.token);
      } catch (err) {
        console.error(err);
      }
  
      setUserFormData({
        username: '',
        email: '',
        password: '',
      });
    };
  
    return (
    <div className="flex-container" id="flexmain" onSubmit={handleFormSubmit}>
        <form className="flex-child login-form">
            <h1 className="signTitle">Login</h1>
            <div className="col-auto" id="topfill">
                <input type="text" className="form-control" id="username-login" name = "email" placeholder="Email" onChange={(e) => handleInputChange(e)} value={userFormData.email}></input>
            </div>
            <div className="col-auto">
                <input type="password" className="form-control" id="password-login" name = "password" placeholder="Password" onChange={(e) => handleInputChange(e)} value={userFormData.password}></input>
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