import { ADD_ITEM, TOGGLE_ITEM_COMPLETED } from '../actions/todos'

export default function todos (state = [], action) {
  let todos = state.slice()
  switch (action.type) {
    case ADD_ITEM:
      todos.push({
        title: action.title,
        completed: false
      })
      return todos
    case TOGGLE_ITEM_COMPLETED:
      let todo = todos[action.index]
      todos[action.index] = Object.assign({}, todo, {completed: !todo.completed})
      return todos
    default:
      return todos
  }
}
