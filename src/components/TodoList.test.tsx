/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoList from './TodoList'

Enzyme.configure({ adapter: new Adapter() })

const items = [
  { title: 'Item One', completed: false, id: '0' },
  { title: 'Item Two', completed: true, id: '1' },
  { title: 'Item Three', completed: true, id: '2' }
]

it('forwards click events to its `onClick` property', () => {
  const onClick = jest.fn()
  const wrapper = Enzyme.mount(<TodoList items={items} onClickItem={onClick} />)
  wrapper
    .find('.todo-list-item input[type="checkbox"]')
    .first()
    .simulate('change')
  expect(onClick).toBeCalledWith('0')
})
