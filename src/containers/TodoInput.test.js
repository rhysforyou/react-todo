/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TodoInput } from './TodoInput'

Enzyme.configure({ adapter: new Adapter() });

it('dispatches a Add Todo Item action on form submission', () => {
  const dispatch = jest.fn()
  const addTodo = Enzyme.shallow(
    <TodoInput dispatch={dispatch} />
  )
  const form = addTodo.find('form')
  const input = form.find('input')

  input.simulate('change', { target: { value: 'Test' } })
  form.simulate('submit', { preventDefault: jest.fn() })

  expect(dispatch).toBeCalled()
})
