import React from 'react'
import './App.css'
import TodoInput from './TodoInput'
import VisibleTodoList from '../containers/VisibleTodoList'
import FooterContainer from '../containers/FooterContainer'

const App = ({state, onUpdateInput, onSubmitInput}) => {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1><span className='highlight'>React</span> To Do List</h1>
      </header>
      <TodoInput
        value={state.inputValue}
        onChange={onUpdateInput}
        onSubmit={onSubmitInput} />
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
