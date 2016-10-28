import React from 'react'
import './TodoFilterBar.css'
import titleCase from 'title-case'

const renderButtons = (filters, counts, active, onClick) => {
  return filters.map((filter, index) => (
    <button
      key={index}
      onClick={(e) => onClick(filter)}
      className={filter === active ? 'active' : 'inactive'}>
      {titleCase(filter)} ({counts[index]})
    </button>
  ))
}
const TodoFilterBar = ({filters, filterCounts, activeFilter, onClickFilter}) => (
  <div className='todo-filter-bar'>
    {renderButtons(filters, filterCounts, activeFilter, onClickFilter)}
  </div>
)
TodoFilterBar.propTypes = {
  filters: React.PropTypes.array,
  filterCounts: React.PropTypes.array,
  activeFilter: React.PropTypes.string,
  onClickFilter: React.PropTypes.func
}

export default TodoFilterBar
