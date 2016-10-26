import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import Welcome from './Welcome'
import TodoItem from '../TodoItem'
import TodoList from '../TodoList'

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

storiesOf('TodoList', module)
  .add('with some items', () => {
    const items = [
      {title: 'Do one thing', completed: false},
      {title: 'Then do another', completed: true},
      {title: 'Finally, do the last thing', completed: false}
    ]
    return (
      <TodoList items={items} onClick={action('clicked')} />
    )
  })
