/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './Footer'

const filters = ['one', 'two', 'three']

it('renders correctly', () => {
  const tree = renderer.create(
    <Footer filters={filters} activeFilter='one' />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
