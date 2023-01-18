import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import { ChatList } from "./ChatList";

import * as reduxHooks from 'react-redux'


jest.mock('react-redux')
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch')
describe('testing ChatList', () => {
  it('should create ChatList', () => {
    mockUseDispatch.mockReturnValue(jest.fn)
    const component = render(<ChatList messageDB={{}} chats={[]} />)
    expect(component).toMatchSnapshot()
  })

  it('should dispatch action', () => {
    const dispatch = jest.fn;
    mockUseDispatch.mockReturnValue(dispatch)
   
    render(
      <ChatList messageDB={{}} chats={[]} />
      )
    const buttons = screen.getByRole('button')

  })

})