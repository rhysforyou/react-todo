/* eslint-env jest */
import * as VisibilityFilter from './visibilityFilter'

it('can create a Set Filter action', () => {
  expect(VisibilityFilter.setFilter(VisibilityFilter.Filters.FILTER_ALL)).toEqual({
    type: VisibilityFilter.SET_FILTER,
    filter: VisibilityFilter.Filters.FILTER_ALL
  })
})
