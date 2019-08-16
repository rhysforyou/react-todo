import { Action } from 'redux'

export interface AddItemAction extends Action {
  type: 'ADD_ITEM'
  title: string
}

export function addItem(title: string): AddItemAction {
  return { type: 'ADD_ITEM', title }
}

export interface ToggleItemCompletedAction extends Action {
  type: 'TOGGLE_ITEM_COMPLETED'
  id: string
}

export function toggleItemCompleted(id: string): ToggleItemCompletedAction {
  return { type: 'TOGGLE_ITEM_COMPLETED', id }
}
