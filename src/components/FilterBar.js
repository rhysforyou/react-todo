import './FilterBar.css'
import PropTypes from 'prop-types';
import React from 'react'

const renderButtons = (filters, active, onClick) => {
  return filters.map((filter, index) => (
    <button
      key={index}
      onClick={(e) => onClick(filter)}
      className={filter === active ? 'active' : 'inactive'}>
      {filter}
    </button>
  ))
}
const FilterBar = ({filters, activeFilter, onClickFilter}) => (
  <div className='todo-filter-bar'>
    {renderButtons(filters, activeFilter, onClickFilter)}
  </div>
)
FilterBar.propTypes = {
  filters: PropTypes.array.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onClickFilter: PropTypes.func
}

export default FilterBar