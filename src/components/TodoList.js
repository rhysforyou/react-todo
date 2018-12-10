import PropTypes from 'prop-types';
import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const renderItems = (items, onClickItem) => {
  return items.map((item, index) => (
    <TodoItem
      title={item.title}
      completed={item.completed}
      key={item.id}
      onClick={() => onClickItem(item.id)} />
  ))
}

const TodoList = ({items, onClickItem}) => (
  <ul className='todo-list'>
    {renderItems(items, onClickItem)}
  </ul>
)
TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickItem: PropTypes.func
}

export default TodoList