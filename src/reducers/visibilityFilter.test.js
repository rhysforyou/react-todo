/* eslint-env jest */
import * as Actions from '../actions/visibilityFilter'
import visibilityFilter from './visibilityFilter.js'

it('can change the current filter', () => {
  let initialState = Actions.Filters.FILTER_ALL
  let action = Actions.setFilter(Actions.Filters.FILTER_COMPLETED)

  let state = visibilityFilter(initialState, action)

  expect(state).toBe(Actions.Filters.FILTER_COMPLETED)
})
