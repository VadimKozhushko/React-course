import React from "react";
import ReactDOM from 'react-dom';
import AppForTest  from "./App";
import '@testing-library/jest-dom'

it('render without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppForTest/>, div)
  ReactDOM.unmountComponentAtNode(div);
})