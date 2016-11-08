import { Filters, SET_FILTER } from '../actions/visibilityFilter'

export default function visibilityFilter (state = Filters.FILTER_ALL, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}
