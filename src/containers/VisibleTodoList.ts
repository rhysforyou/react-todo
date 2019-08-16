import { connect } from 'react-redux'
import { toggleItemCompleted } from '../actions/todos'
import { Filter } from '../actions/visibilityFilter'
import TodoList from '../components/TodoList'
import { ToDoItem } from '../reducers/todos'
import { State } from '../reducers/todoApp'
import { Dispatch } from 'react'
import { Action } from '../actions'

const getVisibleItems = (todos: ToDoItem[], filter: Filter): ToDoItem[] => {
  switch (filter) {
    case Filter.Completed:
      return todos.filter(t => t.completed)
    case Filter.Incomplete:
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

interface StateProps {
  items: ToDoItem[]
}

export const mapStateToProps = (state: State): StateProps => {
  return {
    items: getVisibleItems(state.todos, state.visibilityFilter)
  }
}

interface DispatchProps {
  onClickItem: (id: string) => void
}

export const mapDispatchToProps = (
  dispatch: Dispatch<Action>
): DispatchProps => {
  return {
    onClickItem: id => {
      dispatch(toggleItemCompleted(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
