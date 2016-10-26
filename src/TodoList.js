import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({items, onClick}) => {
  const listItems = items.map((item, index) => {
    return (
      <TodoItem
        title={item.title}
        completed={item.completed}
        key={index}
        onClick={() => onClick(index)} />
    )
  })

  return (
    <ul className='todo-list'>
      {listItems}
    </ul>
  )
}
TodoList.propTypes = {
  items: React.PropTypes.array,
  onClick: React.PropTypes.func
}

export default TodoList
