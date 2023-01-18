import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

import { GistsList } from "./Gists";
import * as reduxHooks from 'react-redux'

jest.mock('react-redux')

describe('testing Gist Page', () => {
  const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector')
  const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch')
  const dispatch = jest.fn()

  it('creating snapshot Gist Pages', () => {
    mockUseSelector.mockReturnValue([])
    mockUseDispatch.mockReturnValue(dispatch)
    const component = {}
      render(
            <GistsList/>     
          )
    expect(component).toMatchSnapshot()
  })
  it('testing button functioan', async () => {
    render(
      <GistsList/>
    )
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(dispatch).toHaveBeenCalled()
  })
})