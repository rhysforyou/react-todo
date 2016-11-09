import React, { Component } from 'react'
import { Filters } from '../actions/visibilityFilter'
import App from '../components/App'

class AppContainer extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        {title: 'Learn React', completed: false},
        {title: 'Learn Redux', completed: false},
        {title: 'Get loads of VC money', completed: false},
        {title: 'Sell *completely* out', completed: false}
      ],
      inputValue: ''
    }
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
  render () {
    return (
      <App state={this.state}
        onUpdateInput={(val) => this.handleInputChange(val)}
        onSubmitInput={() => this.handleAddItem()} />
    )
  }
}

export default AppContainer
