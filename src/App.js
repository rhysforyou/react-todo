import React, { Component } from 'react'
import './App.css'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        {title: 'Do one thing', completed: false},
        {title: 'Then do another', completed: false},
        {title: 'Finally, do the last thing', completed: false}
      ],
      inputValue: ''
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
      title: this.state.inputValue,
      completed: false
    })
    this.setState({
      todos: todos,
      inputValue: ''
    })
  }
  render () {
    return (
      <div className='app'>
        <h1>To Do List</h1>
        <ToDoInput
          value={this.state.inputValue}
          onChange={(event) => this.handleInputChange(event)}
          onSubmit={() => this.addItem()} />
        <ToDoList items={this.state.todos}
          onClick={(i) => this.toggleItemCompleted(i)} />
      </div>
    )
  }
}

export default App
