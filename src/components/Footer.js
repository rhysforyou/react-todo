import React from 'react'
import './Footer.css'

const renderButtons = (filters, counts, active, onClick) => {
  return filters.map((filter, index) => (
    <button
      key={index}
      onClick={(e) => onClick(filter)}
      className={filter === active ? 'active' : 'inactive'}>
      {filter} ({counts[index]})
    </button>
  ))
}
const Footer = ({filters, filterCounts, activeFilter, onClickFilter}) => (
  <div className='todo-filter-bar'>
    {renderButtons(filters, filterCounts, activeFilter, onClickFilter)}
  </div>
)
Footer.propTypes = {
  filters: React.PropTypes.array,
  filterCounts: React.PropTypes.array,
  activeFilter: React.PropTypes.string,
  onClickFilter: React.PropTypes.func
}

export default Footer
