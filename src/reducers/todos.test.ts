/* eslint-env jest */
import * as Actions from '../actions/todos'
import todos, { TodosState } from './todos'

it('can create new todos', () => {
  let initialState: TodosState = []
  let action = Actions.addItem('Test Item')

  let state = todos(initialState, action)

  expect(state.length).toBe(1)
  expect(state[0]).toEqual({ title: 'Test Item', completed: false, id: '0' })
})

it("can toggle a todo item's completion", () => {
  let initialState = [
    { title: 'Test Item One', completed: false, id: '0' },
    { title: 'Test Item Two', completed: true, id: '1' },
    { title: 'Test Item Three', completed: false, id: '2' }
  ]

  let finalState = [
    { title: 'Test Item One', completed: true, id: '0' },
    { title: 'Test Item Two', completed: false, id: '1' },
    { title: 'Test Item Three', completed: false, id: '2' }
  ]

  let actions = [
    Actions.toggleItemCompleted('0'),
    Actions.toggleItemCompleted('1')
  ]

  let state = actions.reduce(
    (state, action) => todos(state, action),
    initialState
  )

  expect(state).toEqual(finalState)
})
