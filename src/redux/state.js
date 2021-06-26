let rerenderEntireTree = () => {
  console.log('State changed!')
}

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi!How are you?', likesCount: 55},
      {id: 2, message: 'It\'s my first post))', likesCount:15},
      {id: 3, message: 'Ok!'}
    ],
    newPostText: 'it-camara'
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

window.state = state

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state