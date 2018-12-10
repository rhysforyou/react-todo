/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoItem from './TodoItem'

Enzyme.configure({ adapter: new Adapter() });

describe('TodoItem', () => {
  it('forwards click events to its `onClick` property', () => {
    const onClick = jest.fn()
    const wrapper = Enzyme.shallow(
      <TodoItem title='Test Item'
        completed={false}
        onClick={onClick} />
    )
    wrapper.find('.todo-list-item').simulate('click')
    expect(onClick).toBeCalled()
  })

  describe('`completion` property', () => {
    it("applies the 'completed' class if present", () => {
      const wrapper = Enzyme.shallow(
        <TodoItem title='Test Item'
          completed={true} />
      )
      expect(wrapper.find('.completed'))
    })

    it("applies the 'incomplete' class if absent", () => {
      const wrapper = Enzyme.shallow(
        <TodoItem title='Test Item'
          completed={false} />
      )
      expect(wrapper.find('.incomplet'))
    })
  })
})
