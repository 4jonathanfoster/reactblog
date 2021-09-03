import "../post/post.css"
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function Signup() {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [adduser, { error }] = useMutation(ADD_USER);
  
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        //const response = await createUser(userFormData);
        console.log('sign up form');
        const { data } = await adduser({
          variables: { ...userFormData },
        });
        console.log(data);
        Auth.login(data.addUser.token);
      } 
      catch (err) {
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
            <h1 className="signTitle">Sign-Up</h1>
            <div className="col-auto" id="topfill">
                <input type="text" className="form-control" id="username-signup" placeholder="Username" name = "username" onChange={(e) => handleInputChange(e)} value={userFormData.username}></input>
            </div>
            <div className="col-auto">
                <input type="text" className="form-control" id="email-signup" placeholder="Email" name = "email" onChange={(e) => handleInputChange(e)} value={userFormData.email}></input>
            </div>
            <div className="col-auto">
                <input type="password" className="form-control" id="password-signup" placeholder="Password" name = "password" onChange={(e) => handleInputChange(e)} value={userFormData.password}></input>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary" id="login-btn">Signup</button>
            </div>
            <div className="col-auto">
                <p>New here?<span><a className="hyperlink" href="signup"> Sign-Up Here!</a></span></p>
            </div>
        </form>
    </div>
    )
}