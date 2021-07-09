import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi!How are you?', likesCount: 55},
        {id: 2, message: 'It\'s my first post))', likesCount: 15},
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
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed!')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)

  }
}





export default store
window.store = store