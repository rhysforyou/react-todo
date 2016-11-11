/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from './TodoItem'

describe('TodoItem', () => {
  it('forwards click events to its `onClick` property', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <TodoItem title='Test Item'
        completed={false}
        onClick={onClick} />
    )
    wrapper.find('.todo-list-item').simulate('click')
    expect(onClick).toBeCalled()
  })

  describe('`completion` property', () => {
    it("applies the 'completed' class if present", () => {
      const wrapper = shallow(
        <TodoItem title='Test Item'
          completed={true} />
      )
      expect(wrapper.find('.completed'))
    })

    it("applies the 'incomplete' class if absent", () => {
      const wrapper = shallow(
        <TodoItem title='Test Item'
          completed={false} />
      )
      expect(wrapper.find('.incomplet'))
    })
  })
})
