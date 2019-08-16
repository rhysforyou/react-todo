import './TodoItem.css'
import React from 'react'

const completionClass = (completed: boolean) =>
  completed ? 'completed' : 'incomplete'

interface TodoItemProps {
  title: string
  completed: boolean
  onClick: () => void
}

const TodoItem = ({ title, completed, onClick }: TodoItemProps) => (
  <li className={`todo-list-item ${completionClass(completed)}`}>
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={e => {
          onClick()
        }}
      />
      {title}
    </label>
  </li>
)

export default TodoItem
