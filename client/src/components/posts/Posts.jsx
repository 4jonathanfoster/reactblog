import React, { useState } from 'react';
import {useQuery} from '@apollo/client';
import Post from "../post/Post"
import "./posts.css"
import { ALL_POSTS} from '../../utils/queries';
export default function Posts() {
// const [allPost,setAllPost] = useState([])
// if (!allPost){
    const {data, loading } = useQuery(ALL_POSTS);
    if (data){console.log(data)
    
        console.log(data.AllPosts)
    };
// }
    return (
        <div className="posts">
            {
                data!== undefined?data.AllPosts.map(data=>{
                    return(
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFCvBzAMlw8kr5_JWq5TkHp6zgQMh2w-mEA&usqp=CAU" alt="no image"/>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </div>
                    )
                }):null
            }
           {/* <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
           <Post/> */}
        </div>
    )
}
