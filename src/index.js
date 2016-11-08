import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import './index.css'

import { createStore } from 'redux'
import todoApp from './reducers/todoApp'
import { addItem, toggleItemCompleted } from './actions/todos'
import { Filters, setFilter } from './actions/visibilityFilter'

let store = createStore(todoApp)

window.console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addItem('Learn about actions'))
store.dispatch(addItem('Learn about reducers'))
store.dispatch(addItem('Learn about store'))
store.dispatch(toggleItemCompleted(0))
store.dispatch(toggleItemCompleted(1))
store.dispatch(setFilter(Filters.FILTER_COMPLETED))

unsubscribe()

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
)
