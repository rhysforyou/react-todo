/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import TodoItem from './TodoItem'

it('renders correctly', () => {
  const tree = renderer.create(
    <TodoItem title='Test Item' completed />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
