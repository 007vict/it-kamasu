import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    {id: 1, message: 'Hi!How are you?', likesCount: 55},
    {id: 2, message: 'It\'s my first post))', likesCount:15},
    {id: 3, message: 'Ok!'}
  ]

  return <div className={s.postBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea/>
      </div>
      <div>
        <button>Add post</button>
        <div/>
      </div>
      <div>New post</div>
      <div className={s.posts}>
        <Post message={postData[0].message} count={postData[0].likesCount}/>
        <Post message={postData[1].message} count={postData[1].likesCount}/>
      </div>
    </div>
  </div>
}

export default MyPosts;