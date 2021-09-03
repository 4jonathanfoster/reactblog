import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_USER_POST } from '../../utils/mutations';
import Auth from '../../utils/auth';
import "../../pages/write/write.css"

export default function Write() {
    const [postForm, setpostForm] = useState({ title: '', description: '' });
    const [savePostUser, { error }] = useMutation(SAVE_USER_POST);

    const handleInputChange = (event) => {
        
        const { name, value } = event.target;
        setpostForm({ ...postForm, [name]: value });
      };
      console.log(postForm);


      const handleUserPost = async (event) => {
        event.preventDefault();

        console.log("herrer");

        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log(token);
        if (!token) {
          return false;
        }
        console.log(postForm);
        try {
          const { data } = await savePostUser({
            variables: { newPost:  {...postForm} },
          });
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <div className="write">
            <img className="writeImg"
            src="" alt="" />
            <form className="writeForm" onSubmit={handleUserPost}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"></label>
                    <i className="writeIcon fas fa-plus"></i>
                    <input type="text" placeholder="Title"className="writeInput" autoFocus={true} name = "title" onChange={(e) => handleInputChange(e)} value={postForm.title}></input>
                </div>
                <div className= "writeFormGroup">
                    <textarea placeholder="Add code problems ..." type="text" className="writeInput writeText"  name = "description" onChange={(e) => handleInputChange(e)} value={postForm.description}></textarea>
                </div>
                <button className="writeSubmit">publish</button>
            </form>
        </div>
    )
}
