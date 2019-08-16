/* eslint-env jest */
import * as VisibilityFilter from './visibilityFilter'

it('can create a Set Filter action', () => {
  expect(VisibilityFilter.setFilter(VisibilityFilter.Filter.All)).toEqual({
    type: 'SET_FILTER',
    filter: VisibilityFilter.Filter.All
  })
})
