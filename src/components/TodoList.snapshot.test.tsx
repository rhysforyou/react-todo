/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import TodoList from './TodoList'

it('renders correctly', () => {
  let items = [
    { title: 'Item One', completed: false, id: 0 },
    { title: 'Item Two', completed: true, id: 1 },
    { title: 'Item Three', completed: true, id: 2 }
  ]
  const tree = renderer.create(<TodoList items={items} />).toJSON()
  expect(tree).toMatchSnapshot()
})
