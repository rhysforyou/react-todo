import { Filters, SET_FILTER } from '../actions/filter'

export default function visibilityFilter (state = Filters.FILTER_ALL, action) {
  switch (action) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}
