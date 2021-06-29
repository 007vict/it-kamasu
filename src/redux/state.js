const ADD_POST = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';


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
      ]
    },
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else {
      if (action.type === updateNewPostText) {
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state)
      }
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
  ({type: 'UPDATE-NEW-POST-TEXT', newText: text })

export default store
window.store = store