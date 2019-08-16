/* eslint-env jest */
import * as Todos from './todos'

it('can create an Add Item action', () => {
  expect(Todos.addItem('test')).toEqual({
    type: 'ADD_ITEM',
    title: 'test'
  })
})

it('can create a Toggle Item Completed action', () => {
  expect(Todos.toggleItemCompleted('0')).toEqual({
    type: 'TOGGLE_ITEM_COMPLETED',
    id: '0'
  })
})
