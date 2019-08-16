import React from 'react'
import './App.css'
import TodoInput from './TodoInput'
import VisibleTodoList from './VisibleTodoList'
import FilterBarContainer from './FilterBarContainer'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <TodoInput />
      <VisibleTodoList />
      <FilterBarContainer />
      <AppFooter />
    </div>
  )
}

export default App
