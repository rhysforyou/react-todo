import React from 'react'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './index.css'
import todoApp, { State } from './reducers/todoApp'
import { Action } from './actions'

let store: Store<State, Action> = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
