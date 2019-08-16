/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterBar from './FilterBar'

Enzyme.configure({ adapter: new Adapter() });

const filters = ['one', 'two', 'three']

describe('FilterBar', () => {
  it('forwards click events to its `onClickFilter` property', () => {
    const onClick = jest.fn()
    const wrapper = Enzyme.shallow(
      <FilterBar filters={filters}
        activeFilter='one'
        onClickFilter={onClick} />
    )
    wrapper.find('button').first().simulate('click')
    expect(onClick).toBeCalled()
  })

  it('renders the filters provided to it', () => {
    const wrapper = Enzyme.render(
      <FilterBar filters={filters}
        activeFilter='one' />
    )
    for (var filter of filters) {
      expect(wrapper.text().includes(filter)).toBe(true)
    }
  })

  it("applies the 'active' class to the active filter", () => {
    const wrapper = Enzyme.shallow(
      <FilterBar filters={filters}
        activeFilter='one' />
    )
    const actives = wrapper.find('.active')
    expect(actives.length).toBe(1)
    expect(actives.first().text()).toEqual('one')
  })
})
