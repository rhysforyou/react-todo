/* eslint-env jest */
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../reducers/todoApp'
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

let testStore = createStore(todoApp)

it('renders without crashing', () => {
  Enzyme.shallow(<Provider store={testStore}>
    <App />
  </Provider>)
})
