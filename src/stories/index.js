import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TodoItem from '../components/TodoItem'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'
import Footer from '../components/Footer'

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

storiesOf('TodoInput', module)
  .add('empty', () => (
    <TodoInput value='' onChange={action('change')} onSubmit={action('submit')} />
  ))
  .add('with content', () => (
    <TodoInput value='A new to-do' onChange={action('change')} onSubmit={action('submit')} />
  ))

storiesOf('Footer', module)
  .add('with some filters', () => (
    <Footer filters={['one', 'two', 'three']}
      activeFilter='one'
      onClickFilter={action('clicked')} />
  ))
