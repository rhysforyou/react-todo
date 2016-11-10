/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import FilterBar from './FilterBar'

const filters = ['one', 'two', 'three']

it('forwards click events to its `onClickFilter` property', () => {
  const onClick = jest.fn()
  const wrapper = shallow(
    <FilterBar filters={filters}
      activeFilter='one'
      onClickFilter={onClick} />
  )
  wrapper.find('button').first().simulate('click')
  expect(onClick).toBeCalled()
})
