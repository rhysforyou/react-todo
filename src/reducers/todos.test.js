/* eslint-env jest */
import * as Actions from '../actions/todos'
import todos from './todos.js'

it('can create new todos', () => {
  let initialState = []
  let action = Actions.addItem('Test Item')

  let state = todos(initialState, action)

  expect(state.length).toBe(1)
  expect(state[0]).toEqual({title: 'Test Item', completed: false})
})

it("can toggle a todo item's completion", () => {
  let initialState = [
    {title: 'Test Item One', completed: false},
    {title: 'Test Item Two', completed: true},
    {title: 'Test Item Three', completed: false}
  ]

  let finalState = [
    {title: 'Test Item One', completed: true},
    {title: 'Test Item Two', completed: false},
    {title: 'Test Item Three', completed: false}
  ]

  let actions = [
    Actions.toggleItemCompleted(0),
    Actions.toggleItemCompleted(1)
  ]

  let state = actions.reduce((state, action) => todos(state, action), initialState)

  expect(state).toEqual(finalState)
})
