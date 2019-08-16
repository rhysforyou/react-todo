import { Action } from 'redux'

export enum Filter {
  All = 'ALL',
  Completed = 'COMPLETED',
  Incomplete = 'INCOMPLETE'
}

export interface SetFilterAction extends Action {
  type: 'SET_FILTER'
  filter: Filter
}

export function setFilter(filter: Filter): SetFilterAction {
  return { type: 'SET_FILTER', filter }
}
