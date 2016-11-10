/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import FilterBar from './FilterBar'

const filters = ['one', 'two', 'three']

it('renders correctly', () => {
  const tree = renderer.create(
    <FilterBar filters={filters}
      activeFilter='one' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
