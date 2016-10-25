import React from 'react'

function ToDoItem ({title, completed, onClick}) {
  return (
    <li className='todo-list-item'>
      <label>
        <input type='checkbox' checked={completed} onClick={() => onClick()} />
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
