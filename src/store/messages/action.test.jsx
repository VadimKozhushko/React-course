
import '@testing-library/jest-dom'

import { addChat, deleteChat, addMessage, ADD_CHAT, DELETE_CHAT, ADD_MESSAGE, addMessageWithReply } from "./actions";

describe('testing action messages', () => {
  it('testing add chat', () => {
    const expectedAction = {
      type: ADD_CHAT,
      payload: [1,2,3]  
    }
    expect(addChat(expectedAction.payload)).toEqual(expectedAction)
  })
  it('testing delete chat', () => {
    const expectedAction = {
      type: DELETE_CHAT,
      payload: [1,2,3]  
    }
    expect(deleteChat(expectedAction.payload)).toEqual(expectedAction)
  })

})