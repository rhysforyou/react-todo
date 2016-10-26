import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Welcome from './Welcome'
import ToDoItem from '../ToDoItem'

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ))

storiesOf('ToDoItem', module)
  .add('incomplete', () => (
    <ToDoItem title='An example to-do item' onClick={action('clicked')} />
  ))
  .add('completed', () => (
    <ToDoItem title='An example to-do item' completed onClick={action('clicked')} />
  ))
