import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import './index.css'
import todoApp from './reducers/todoApp'

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
