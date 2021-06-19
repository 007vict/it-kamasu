import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi!How are you?', likesCount: 55},
      {id: 2, message: 'It\'s my first post))', likesCount:15},
      {id: 3, message: 'Ok!'}
    ],
  },
  dialogsPage: {
    messages: [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Ok!'}
    ],
    dialogs: [
      {id: 1, name: 'Victor'},
      {id: 2, name: 'Dim'},
      {id: 3, name: 'Andrey'},
      {id: 4, name: 'Artur'},
      {id: 5, name: 'Ivan'},
      {id: 6, name: 'Vania'},
      {id: 7, name: 'Lena'}
    ]
  },
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}

export default state