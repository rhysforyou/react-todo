import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'
import { ToDoItem as ToDoItemType } from '../reducers/todos'

interface ToDoListProps {
  items: ToDoItemType[]
  onClickItem: (itemID: string) => void
}

const renderItems = (
  items: ToDoItemType[],
  onClickItem: (itemID: string) => void
) => {
  return items.map(item => (
    <TodoItem
      title={item.title}
      completed={item.completed}
      key={item.id}
      onClick={() => onClickItem(item.id)}
    />
  ))
}

const TodoList = ({ items, onClickItem }: ToDoListProps) => (
  <ul className="todo-list">{renderItems(items, onClickItem)}</ul>
)

export default TodoList
