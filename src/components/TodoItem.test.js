/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from './TodoItem'

it('forwards click events to its `onClick` property', () => {
  const onClick = jest.fn()
  const wrapper = shallow(
    <TodoItem title='Test Item'
      completed
      onClick={onClick} />
  )
  wrapper.find('.todo-list-item').simulate('click')
  expect(onClick).toBeCalled()
})
