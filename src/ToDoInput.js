import React from 'react'

const TodoInput = ({value, onChange, onSubmit}) => {
  return (
    <div className='Todo-input'>
      <input type='text' value={value} onChange={onChange} />
      <input type='button' value='Add Item' onClick={onSubmit} />
    </div>
  )
}
TodoInput.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}

export default TodoInput
