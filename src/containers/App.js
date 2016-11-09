import React from 'react'
import './App.css'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import FooterContainer from './FooterContainer'

const App = ({state, onUpdateInput, onSubmitInput}) => {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1><span className='highlight'>React</span> To Do List</h1>
      </header>
      <AddTodo />
      <VisibleTodoList />
      <FooterContainer />
      <footer className='app-footer'>
        <span>Made with a little knowledge, and a lot of ❤️ by <a href='https://twitter.com/rhysforyou'>Rhys Powell</a></span>
        <br />
        <span><a href='https://github.com/rpowelll/react-todo'>View on GitHub</a></span>
      </footer>
    </div>
  )
}
App.propTypes = {
  state: React.PropTypes.object,
  onUpdateInput: React.PropTypes.func,
  onSubmitInput: React.PropTypes.func
}

export default App
