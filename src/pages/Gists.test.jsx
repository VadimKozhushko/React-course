import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { GistsList } from '../Gists'

it('dispatches getArticles on mount', () => {
  render(
  <Provider store={mockStore}>
  <GistsList/>
  </Provider>
  );
  const actions = mockStore.getActions();
  const lastAction = actions[actions.length - 1];
  expect(lastAction).toEqual(getGistsRequest());
  });