/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { TodoInput } from './TodoInput'

it('dispatches a Add Todo Item action on form submission', () => {
  const dispatch = jest.fn()
  const addTodo = shallow(
    <TodoInput dispatch={dispatch} />
  )
  const form = addTodo.find('form')
  const input = form.find('input')

  input.simulate('change', { target: { value: 'Test' } })
  form.simulate('submit', { preventDefault: jest.fn() })

  expect(dispatch).toBeCalled()
})
