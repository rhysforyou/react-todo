export const Filters = {
  FILTER_ALL: 'All',
  FILTER_COMPLETED: 'Completed',
  FILTER_INCOMPLETE: 'Incomplete'
}

export const SET_FILTER = 'SET_FILTER'

export function setFilter (filter) {
  return { type: SET_FILTER, filter }
}
