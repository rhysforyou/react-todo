import './TodoItem.css'
import React from 'react'

const TodoItem = ({title, completed, onClick}) => {
  const completionClass = completed ? 'completed' : 'incomplete'
  return (
    <li className={`Todo-list-item ${completionClass}`} onClick={onClick}>
      <label>
        <input type='checkbox' checked={completed} />
        {title}
      </label>
    </li>
  )
}
TodoItem.propTypes = {
  title: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onClick: React.PropTypes.func
}

export default TodoItem
