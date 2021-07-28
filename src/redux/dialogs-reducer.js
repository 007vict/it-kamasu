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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return  {
        ...state,
        messages: [...state.messages, {id: 8, message: body}]
      }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer