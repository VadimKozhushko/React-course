import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from './actions'
import { AUTHOR } from '../../constants'

const initailState = {
  default: [
    {
      author: 'user',
      text: 'one text'
    },
    {
      author: 'user',
      text: 'two text'
    },
  ]
}

export const messagesReducer = (state = initailState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_CHAT:
      return {
        ...state,
        [payload]: []
      }

    case DELETE_CHAT:
      const chats = { ...state }
      delete chats[payload]
      return chats

    case ADD_MESSAGE:
      return {
        ...state,
        [payload.chatName]: [
          ...state[payload.chatName],
          {
            author: AUTHOR.user,
            text: payload.text
          }
        ],
      }

    default:
      return state
  }
}