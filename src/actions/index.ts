import { SetFilterAction } from './visibilityFilter'
import { AddItemAction, ToggleItemCompletedAction } from './todos'

export type Action = SetFilterAction | AddItemAction | ToggleItemCompletedAction

export { setFilter } from './visibilityFilter'
export { addItem, toggleItemCompleted } from './todos'
