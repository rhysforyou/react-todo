import './Footer.css'
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
const Footer = ({filters, activeFilter, onClickFilter}) => (
  <div className='todo-filter-bar'>
    {renderButtons(filters, activeFilter, onClickFilter)}
  </div>
)
Footer.propTypes = {
  filters: React.PropTypes.array.isRequired,
  activeFilter: React.PropTypes.string.isRequired,
  onClickFilter: React.PropTypes.func
}

export default Footer
