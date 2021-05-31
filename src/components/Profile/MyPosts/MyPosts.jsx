import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
  return <div>My posts
      <div>
        <textarea/>
        <button>Add post</button>
      </div>
      <div>New post</div>
      <div className={s.posts}>
        <Post message='Hi!How are you?' count='55'/>
        <Post  message="It's my first post))" count='15'/>
      </div>
    </div>
}

export default MyPosts;