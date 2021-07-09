const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return  {
        ...state,
        newMessageBody: action.body
      }
    case SEND_MESSAGE:
      let body = state.newMessageBody
      return  {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 8, message: body}]
      }
    default:
      return state
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer