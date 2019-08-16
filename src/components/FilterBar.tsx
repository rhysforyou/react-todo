import './FilterBar.css'
import React from 'react'
import { Filter } from '../actions/visibilityFilter'

const renderButtons = (
  filters: Filter[],
  active: string,
  onClick: (filter: Filter) => void
) => {
  return filters.map((filter, index) => (
    <button
      key={index}
      onClick={e => onClick(filter)}
      className={filter === active ? 'active' : 'inactive'}
    >
      {filter}
    </button>
  ))
}

interface FilterBarProps {
  filters: Filter[]
  activeFilter: string
  onClickFilter: (filter: Filter) => void
}

const FilterBar = ({
  filters,
  activeFilter,
  onClickFilter
}: FilterBarProps) => (
  <div className="todo-filter-bar">
    {renderButtons(filters, activeFilter, onClickFilter)}
  </div>
)
export default FilterBar
