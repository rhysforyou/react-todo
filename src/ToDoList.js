import React from 'react'
import ToDoItem from './ToDoItem.js'

function ToDoList ({items, onClick}) {
  const listItems = items.map((item, index) => {
    return (
      <ToDoItem
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
ToDoList.propTypes = {
  items: React.PropTypes.array,
  onClick: React.PropTypes.func
}

export default ToDoList
