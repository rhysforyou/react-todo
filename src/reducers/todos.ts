import { Action } from '../actions'

export interface ToDoItem {
  title: string
  completed: boolean
  id: string
}

export type TodosState = ToDoItem[]

let lastIndex = 0

export default function todos(
  state: TodosState = [],
  action: Action
): TodosState {
  let todos = state.slice()
  switch (action.type) {
    case 'ADD_ITEM':
      todos.push({
        title: action.title,
        completed: false,
        id: (lastIndex++).toString()
      })
      return todos
    case 'TOGGLE_ITEM_COMPLETED': {
      let todoIndex = todos.findIndex(todo => todo.id === action.id)
      if (todoIndex !== -1) {
        let todo = todos[todoIndex]
        todos[todoIndex] = { ...todo, completed: !todo.completed }
      }
      return todos
    }
    default:
      return todos
  }
}
