import React from 'react'
import { Filters } from '../actions'
import TodoList from '../components/TodoList'

const visibleItems = (todos, filter) => {
  switch (filter) {
    case Filters.FILTER_COMPLETED:
      return todos.filter(t => t.completed)
    case Filters.FILTER_INCOMPLETE:
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const VisibleTodoList = ({items, filter, onClickItem}) => (
  <TodoList items={visibleItems(items, filter)}
    onClickItem={onClickItem} />
)
VisibleTodoList.propTypes = {
  items: React.PropTypes.array,
  filter: React.PropTypes.string,
  onClickItem: React.PropTypes.func
}

export default VisibleTodoList
