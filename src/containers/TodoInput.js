import './TodoInput.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addItem } from '../actions/todos'

export class TodoInput extends Component {
  constructor () {
    super()
    this.state = {value: ''}
  }
  handleChange (event) {
    this.setState({value: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.dispatch(addItem(this.state.value))
    this.setState({value: ''})
  }
  render () {
    const canSubmit = (this.state.value !== '')
    return (
      <form className='todo-input' onSubmit={(e) => this.handleSubmit(e)}>
        <input type='text'
          placeholder='Add a new to-do'
          value={this.state.value}
          onChange={(e) => this.handleChange(e)} />
        <button type='submit' disabled={!canSubmit}>Add To-Do</button>
      </form>
    )
  }
}
TodoInput.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(TodoInput)
