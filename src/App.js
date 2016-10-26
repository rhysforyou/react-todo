import React, { Component } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      Todos: [
        {title: 'Do one thing', completed: false},
        {title: 'Then do another', completed: false},
        {title: 'Finally, do the last thing', completed: false}
      ],
      inputValue: ''
    }
  }
  toggleItemCompleted (i) {
    let Todos = this.state.Todos.slice()
    let Todo = Todos[i]

    Todos[i] = {
      title: Todo.title,
      completed: !Todo.completed
    }

    this.setState({Todos: Todos})
  }
  handleInputChange (event) {
    this.setState({inputValue: event.target.value})
  }
  addItem () {
    let Todos = this.state.Todos.slice()
    Todos.push({
      title: this.state.inputValue,
      completed: false
    })
    this.setState({
      Todos: Todos,
      inputValue: ''
    })
  }
  render () {
    return (
      <div className='app'>
        <h1>To Do List</h1>
        <TodoInput
          value={this.state.inputValue}
          onChange={(event) => this.handleInputChange(event)}
          onSubmit={() => this.addItem()} />
        <TodoList items={this.state.Todos}
          onClick={(i) => this.toggleItemCompleted(i)} />
      </div>
    )
  }
}

export default App
