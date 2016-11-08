export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM_COMPLETED = 'TOGGLE_ITEM_COMPLETED'

export function addItem (title) {
  return { type: ADD_ITEM, title }
}

export function toggleItemCompleted (index) {
  return { type: TOGGLE_ITEM_COMPLETED, index }
}
