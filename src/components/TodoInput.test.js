/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import TodoInput from './TodoInput'

it('renders correctly', () => {
  const tree = renderer.create(
    <TodoInput value='Test Item' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
