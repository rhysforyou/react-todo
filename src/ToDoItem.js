import './ToDoItem.css'
import React from 'react'

const ToDoItem = ({title, completed, onClick}) => {
  const completionClass = completed ? 'completed' : 'incomplete'
  return (
    <li className={`todo-list-item ${completionClass}`}>
      <label>
        <input type='checkbox' checked={completed} onClick={onClick} />
        {title}
      </label>
    </li>
  )
}
ToDoItem.propTypes = {
  title: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onClick: React.PropTypes.func
}

export default ToDoItem
