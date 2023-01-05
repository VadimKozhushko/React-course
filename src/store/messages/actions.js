import { AUTHOR } from '../../constants'

export const ADD_CHAT = 'ADD_CHAT'
export const DELETE_CHAT = 'DELETE_CHAT'
export const ADD_MESSAGE = 'ADD_MESSAGE'



export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat
})

export const deleteChat = (chatName) => ({
  type: DELETE_CHAT,
  payload: chatName
})

export const addMessage = (chatName, text) => ({
  type: ADD_MESSAGE,
  payload: {chatName, text}
})

let timeout
export const addMessageWithBot = (chatName, message) => (dispatch) => {
  dispatch(addMessage(chatName, message))

  if (message.author !== AUTHOR.bot) {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      dispatch(addMessage(chatName, {
        author: AUTHOR.bot,
        text: 'HELLOW!'
      }))
    }, 1000)
  }
}