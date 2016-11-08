import React, { Component } from 'react'
import { Filters } from '../actions/visibilityFilter'
import App from '../components/App'

class AppContainer extends Component {
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
      activeFilter: Filters.FILTER_ALL
    }
  }
  handleClickItem (i) {
    let todos = this.state.todos.slice()
    let todo = todos[i]

    todos[i] = {
      id: todo.id,
      title: todo.title,
      completed: !todo.completed
    }

    this.setState({todos: todos})
  }
  handleInputChange (value) {
    this.setState({inputValue: value})
  }
  handleAddItem () {
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
  setFilter (filter) {
    this.setState({activeFilter: filter})
  }
  render () {
    return (
      <App state={this.state}
        onClickItem={(i) => this.handleClickItem(i)}
        onUpdateInput={(val) => this.handleInputChange(val)}
        onSubmitInput={() => this.handleAddItem()}
        onClickFilter={(filter) => this.setFilter(filter)} />
    )
  }
}

export default AppContainer
