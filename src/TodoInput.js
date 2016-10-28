import React from 'react'
import './TodoInput.css'

const TodoInput = ({value, onChange, onSubmit}) => (
  <div className='todo-input'>
    <input type='text'
      placeholder='Add a new to-do'
      value={value}
      onChange={onChange} />
    <button disabled={value === ''} onClick={onSubmit}>Add To-Do</button>
  </div>
)
TodoInput.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}

export default TodoInput
