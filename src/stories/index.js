import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Welcome from './Welcome'
import TodoItem from '../TodoItem'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ))

storiesOf('TodoItem', module)
  .add('incomplete', () => (
    <TodoItem title='An example to-do item' onClick={action('clicked')} />
  ))
  .add('completed', () => (
    <TodoItem title='An example to-do item' completed onClick={action('clicked')} />
  ))
