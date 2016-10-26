import React from 'react'
import './TodoFilterBar.css'
import titleCase from 'title-case'

const TodoFilterBar = ({filters, activeFilter, onClickFilter}) => {
  let filterButtons = filters.map((filter, index) => (
    <button
      key={index}
      onClick={(e) => onClickFilter(filter)}
      className={filter === activeFilter ? 'active' : 'inactive'}>
      {titleCase(filter)}
    </button>
  ))
  return (
    <div className='todo-filter-bar'>
      {filterButtons}
    </div>
  )
}
TodoFilterBar.propTypes = {
  filters: React.PropTypes.array,
  activeFilter: React.PropTypes.string,
  onClickFilter: React.PropTypes.func
}

export default TodoFilterBar
