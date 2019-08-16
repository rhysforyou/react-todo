/* eslint-env jest */
import * as Actions from '../actions/visibilityFilter'
import visibilityFilter from './visibilityFilter'

it('can change the current filter', () => {
  let initialState = Actions.Filter.All
  let action = Actions.setFilter(Actions.Filter.Completed)

  let state = visibilityFilter(initialState, action)

  expect(state).toBe(Actions.Filter.Completed)
})
