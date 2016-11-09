import './AddTodo.css'
import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/todos'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className='todo-input'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addItem(input.value))
        input.value = ''
      }}>
        <input type='text' ref={node => {
          input = node
        }} />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo.propTypes = {
  dispatch: React.PropTypes.func.isRequired
}
AddTodo = connect()(AddTodo)

export default AddTodo
