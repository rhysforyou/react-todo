/* eslint-env jest */
import { Filters } from '../actions/visibilityFilter'
import { TOGGLE_ITEM_COMPLETED } from '../actions/todos'
import { mapStateToProps, mapDispatchToProps } from './VisibleTodoList'

describe('Visible Todo List', () => {
  it('can map the app state to a list of filtered todo items', () => {
    var initialState = {
      todos: [
        {title: 'Test Item One', completed: false},
        {title: 'Test Item Two', completed: true},
        {title: 'Test Item Three', completed: false}
      ],
      visibilityFilter: Filters.FILTER_COMPLETED
    }

    expect(mapStateToProps(initialState)).toEqual({
      items: [
        {title: 'Test Item Two', completed: true, id: 1}
      ]
    })

    initialState.visibilityFilter = Filters.FILTER_INCOMPLETE

    expect(mapStateToProps(initialState)).toEqual({
      items: [
        {title: 'Test Item One', completed: false, id: 0},
        {title: 'Test Item Three', completed: false, id: 2}
      ]
    })
  })

  it('can create functions that dispatch redux actions', () => {
    let dispatch = jest.fn()
    let props = mapDispatchToProps(dispatch)
    props.onClickItem(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: TOGGLE_ITEM_COMPLETED,
      index: 1
    })
  })
})
