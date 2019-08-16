import todos, { TodosState } from './todos'
import visibilityFilter, { VisibilityFilterState } from './visibilityFilter'
import { combineReducers, Reducer } from 'redux'
import { Action } from '../actions'

export interface State {
  todos: TodosState
  visibilityFilter: VisibilityFilterState
}

const reducer: Reducer<State, Action> = combineReducers({
  todos,
  visibilityFilter
})

export default reducer
