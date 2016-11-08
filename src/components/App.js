import React from 'react'
import './App.css'
import TodoInput from './TodoInput'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'
import { Filters } from '../actions/visibilityFilter'

const App = ({state, onClickItem, onUpdateInput, onSubmitInput, onClickFilter}) => {
  const todos = state.todos
  const completedTodos = todos.filter((todo) => todo.completed)
  const incompleteTodos = todos.filter((todo) => !todo.completed)

  return (
    <div className='app'>
      <header className='app-header'>
        <h1><span className='highlight'>React</span> To Do List</h1>
      </header>
      <TodoInput
        value={state.inputValue}
        onChange={onUpdateInput}
        onSubmit={onSubmitInput} />
      <VisibleTodoList items={todos}
        filter={state.activeFilter}
        onClickItem={onClickItem} />
      <Footer filters={[Filters.FILTER_ALL, Filters.FILTER_COMPLETED, Filters.FILTER_INCOMPLETE]}
        filterCounts={[todos.length, completedTodos.length, incompleteTodos.length]}
        activeFilter={state.activeFilter}
        onClickFilter={onClickFilter} />
      <footer className='app-footer'>
        <span>Made with a little knowledge, and a lot of ❤️ by <a href='https://twitter.com/rhysforyou'>Rhys Powell</a></span>
        <br />
        <span><a href='https://github.com/rpowelll/react-todo'>View on GitHub</a></span>
      </footer>
    </div>
  )
}
App.propTypes = {
  state: React.PropTypes.object,
  onClickItem: React.PropTypes.func,
  onUpdateInput: React.PropTypes.func,
  onSubmitInput: React.PropTypes.func,
  onClickFilter: React.PropTypes.func
}

export default App
