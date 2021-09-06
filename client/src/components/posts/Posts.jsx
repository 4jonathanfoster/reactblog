import React, { useState } from 'react';
import {useQuery} from '@apollo/client';
import Post from "../post/Post"
import "./posts.css"
import { ALL_POSTS} from '../../utils/queries';
export default function Posts() {
// const [allPost,setAllPost] = useState([])
// if (!allPost){
    const {data, loading } = useQuery(ALL_POSTS);
    if (data){console.log(data)};
// }
    return (
        <div className="posts">
            {
                data?data.map(data=>{
                    return(
                        <div>
                            <h3>{data.title}</h3>
                            <p>data.description</p>
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
