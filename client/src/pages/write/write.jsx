import React, { useState, useEffect} from 'react';
import { useMutation , useQuery} from '@apollo/client';
import { SAVE_USER_POST } from '../../utils/mutations';
import { SAVE_POST_DB} from '../../utils/mutations';
import { ALL_POSTS} from '../../utils/queries';


import Auth from '../../utils/auth';
import "../../pages/write/write.css"

export default function Write() {
    const [postForm, setpostForm] = useState({ title: '', description: '' });
    const [savePostUser, { error }] = useMutation(SAVE_USER_POST);
    const [savePostDB, { error_db }] = useMutation(SAVE_POST_DB);
    const {data, error_post, dataPost } = useQuery(ALL_POSTS);

    useEffect((x)=>{
        fetch("/allposts").then((data)=>{
            console.log(data.data)
        })
    },[])
    console.log({data});




    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setpostForm({ ...postForm, [name]: value });
      };

      const handleUserPost = async (event) => {
        event.preventDefault();
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
          return false;
        }
        try {
          const { data } = await savePostUser({
            variables: { newPost:  {...postForm} },
          });
          const { temp } = await savePostDB({
            variables: { ...postForm },
          });

          //const { temp_DB } = await loading;


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
