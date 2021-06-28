let store = {
  _state: {
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
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('State changed!')
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

export default store
window.store = store