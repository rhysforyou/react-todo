import { connect } from 'react-redux'
import { toggleItemCompleted } from '../actions/todos'
import { Filters } from '../actions/visibilityFilter'
import TodoList from '../components/TodoList'

const getVisibleItems = (todos, filter) => {
  let indexedTodos = todos.map((todo, index) => Object.assign({}, todo, {id: index}))
  switch (filter) {
    case Filters.FILTER_COMPLETED:
      return indexedTodos.filter(t => t.completed)
    case Filters.FILTER_INCOMPLETE:
      return indexedTodos.filter(t => !t.completed)
    default:
      return indexedTodos
  }
}

export const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.todos, state.visibilityFilter)
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onClickItem: (id) => {
      dispatch(toggleItemCompleted(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
