/* eslint-env jest */
import React from 'react'
import { mount } from 'enzyme'
import TodoList from './TodoList'

const items = [
  {title: 'Item One', completed: false, id: 0},
  {title: 'Item Two', completed: true, id: 1},
  {title: 'Item Three', completed: true, id: 2}
]

it('forwards click events to its `onClick` property', () => {
  const onClick = jest.fn()
  const wrapper = mount(
    <TodoList items={items}
      onClickItem={onClick} />
  )
  wrapper.find('.todo-list-item').first().simulate('click')
  expect(onClick).toBeCalledWith(0)
})
