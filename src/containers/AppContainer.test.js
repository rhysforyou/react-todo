import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppContainer from './AppContainer'
import todoApp from '../reducers/todoApp'

let testStore = createStore(todoApp)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={testStore}>
    <AppContainer />
  </Provider>, div)
})
