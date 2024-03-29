import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} count={p.likesCount}/>)

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return <div className={s.postBlock}>
    <h3>My posts</h3>
    <AddNewPostFormRedux onSubmit={onAddPost} />
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
}

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component={Textarea}
               placeholder='Post message...'
               validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
        <div/>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;