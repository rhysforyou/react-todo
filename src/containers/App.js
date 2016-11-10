import React from 'react'
import './App.css'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import FilterBarContainer from './FilterBarContainer'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'

const App = () => {
  return (
    <div className='app'>
      <AppHeader />
      <AddTodo />
      <VisibleTodoList />
      <FilterBarContainer />
      <AppFooter />
    </div>
  )
}

export default App
