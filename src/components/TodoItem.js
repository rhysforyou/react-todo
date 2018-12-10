import './TodoItem.css'
import PropTypes from 'prop-types';
import React from 'react'

const completionClass = (completed) => completed ? 'completed' : 'incomplete'
const TodoItem = ({title, completed, onClick}) => (
  <li className={`todo-list-item ${completionClass(completed)}`}
    onClick={onClick}>
    <label>
      <input type='checkbox'
        defaultChecked={completed} />
      {title}
    </label>
  </li>
)
TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

export default TodoItem