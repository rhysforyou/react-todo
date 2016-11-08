import './TodoItem.css'
import React from 'react'

const completionClass = (completed) => completed ? 'completed' : 'incomplete'
const TodoItem = ({title, completed, onClick}) => (
  <li className={`todo-list-item ${completionClass(completed)}`} onClick={onClick}>
    <label>
      <input type='checkbox' checked={completed} />
      {title}
    </label>
  </li>
)
TodoItem.propTypes = {
  title: React.PropTypes.string,
  completed: React.PropTypes.bool,
  onClick: React.PropTypes.func
}

export default TodoItem