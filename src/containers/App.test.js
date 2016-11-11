/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import todoApp from '../reducers/todoApp'

let testStore = createStore(todoApp)

it('renders without crashing', () => {
  const div = document.createElement('div')
  shallow(<Provider store={testStore}>
    <App />
  </Provider>)
})
