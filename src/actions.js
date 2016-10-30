export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM_COMPLETE = 'TOGGLE_ITEM_COMPLETE'
export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER'
export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE'

export const Filters = {
  FILTER_ALL: 'All',
  FILTER_COMPLETED: 'Completed',
  FILTER_INCOMPLETE: 'Incomplete'
}

export function addItem (title) {
  return { type: ADD_ITEM, title }
}

export function toggleItemCompleted (index) {
  return { type: TOGGLE_ITEM_COMPLETE, index }
}

export function setActiveFilter (filter) {
  return { type: SET_ACTIVE_FILTER, filter }
}

export function updateInputValue (value) {
  return { type: UPDATE_INPUT_VALUE, value }
}
