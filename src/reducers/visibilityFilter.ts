import { Filter } from '../actions/visibilityFilter'
import { Action } from '../actions'

export type VisibilityFilterState = Filter

export default function visibilityFilter(
  state: VisibilityFilterState = Filter.All,
  action: Action
): VisibilityFilterState {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}
