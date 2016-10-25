import React from 'react'

function ToDoInput ({value, onChange, onSubmit}) {
  return (
    <div className='todo-input'>
      <input type='text' value={value} onChange={onChange} />
      <input type='button' value='Add Item' onClick={onSubmit} />
    </div>
  )
}
ToDoInput.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}

export default ToDoInput
