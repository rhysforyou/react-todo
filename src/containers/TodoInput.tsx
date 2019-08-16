import './TodoInput.css'
import React, { Component, ChangeEvent, FormEvent } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/todos'
import { Dispatch } from 'redux'
import { Action } from '../actions'

interface TodoInputProps {
  dispatch: Dispatch<Action>
}

interface TodoInputState {
  value: string
}

export class TodoInput extends Component<TodoInputProps, TodoInputState> {
  state: TodoInputState = {
    value: ''
  }
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value })
  }
  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.props.dispatch(addItem(this.state.value))
    this.setState({ value: '' })
  }
  render() {
    const canSubmit = this.state.value !== ''
    return (
      <form className="todo-input" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new to-do"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" disabled={!canSubmit}>
          Add To-Do
        </button>
      </form>
    )
  }
}

export default connect()(TodoInput)
