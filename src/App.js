import React, { Component } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        {id: 0, title: 'Learn React', completed: false},
        {id: 1, title: 'Learn Redux', completed: false},
        {id: 2, title: 'Get loads of VC money', completed: false},
        {id: 3, title: 'Sell *completely* out', completed: false}
      ],
      inputValue: '',
      activeFilter: App.FILTER_INCOMPLETE
    }
  }
  toggleItemCompleted (i) {
    let todos = this.state.todos.slice()
    let todo = todos[i]

    todos[i] = {
      title: todo.title,
      completed: !todo.completed
    }

    this.setState({todos: todos})
  }
  handleInputChange (event) {
    this.setState({inputValue: event.target.value})
  }
  addItem () {
    let todos = this.state.todos.slice()
    todos.push({
      id: todos.length,
      title: this.state.inputValue,
      completed: false
    })
    this.setState({
      todos: todos,
      inputValue: ''
    })
  }
  render () {
    var filteredTodos = this.state.todos

    if (this.state.activeFilter === App.FILTER_COMPLETED) {
      filteredTodos = filteredTodos.filter((todo) => todo.completed)
    } else if (this.state.activeFilter === App.FILTER_INCOMPLETE) {
      filteredTodos = filteredTodos.filter((todo) => !todo.completed)
    }

    return (
      <div className='app'>
        <header className='app-header'>
          <h1><span className='highlight'>React</span> To Do List</h1>
        </header>
        <TodoInput
          value={this.state.inputValue}
          onChange={(event) => this.handleInputChange(event)}
          onSubmit={() => this.addItem()} />
        <TodoList items={filteredTodos}
          onClick={(i) => this.toggleItemCompleted(i)} />
        <footer className='app-footer'>
          <span>Made with a little knowledge, and a lot of ❤️ by <a href='https://twitter.com/rhysforyou'>Rhys Powell</a></span>
          <br />
          <span><a href='https://github.com/rpowelll/react-todo'>View on GitHub</a></span>
        </footer>
      </div>
    )
  }
}
App.FILTER_NONE = 'none'
App.FILTER_COMPLETED = 'completed'
App.FILTER_INCOMPLETE = 'incomplete'

export default App
