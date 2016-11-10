/* eslint-env jest */
import { Filters, SET_FILTER } from '../actions/visibilityFilter'
import { mapStateToProps, mapDispatchToProps } from './FilterBarContainer'

describe('Filter Bar Container', () => {
  it('can map the app state to the active filter', () => {
    let state = { visibilityFilter: Filters.FILTER_ALL }
    expect(mapStateToProps(state).activeFilter).toEqual(Filters.FILTER_ALL)
  })

  it('can create functions that dispatch redux actions', () => {
    let dispatch = jest.fn()
    let props = mapDispatchToProps(dispatch)
    props.onClickFilter(Filters.FILTER_COMPLETED)
    expect(dispatch).toHaveBeenCalledWith({
      type: SET_FILTER,
      filter: Filters.FILTER_COMPLETED
    })
  })
})
