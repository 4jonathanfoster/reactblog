import React,{useState, useEffect} from "react";
import Post from "../post/Post"
import "../posts/posts.css"
import { ALL_POSTS } from "../utils/queries";
export default function Posts() {
    const {loading, data } = useQuery(ALL_POSTS);
    console.log(loading,data);
    useEffect(()=>{
        if (data){
            console.log(data);
        }
    },[])
    return (
        <div className="posts">
            <div className="postsWrapper">
                <img>need image
                    </img>
        <h1 className="postsTitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            <div className="postsEdit">
                <i className="postsIcon far fa-edit"></i>
                <i className="posts Icon far fa-trash-alt"></i>
            </div>
            </h1>
            <div className="postsInfo">
                <span className="postsAuthor">
                    Author: <b>Blog Name</b>
                </span>
                <span className="postsDate">1 hour ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate suscipit nesciunt aliquam ut unde quam aliquid minus consectetur sit. Inventore iusto at nobis doloribus odio officia aspernatur, facere totam.
            </p>
            </div>
        </div>
    )
}
