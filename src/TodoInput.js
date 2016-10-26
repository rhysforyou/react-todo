import React from 'react'

const TodoInput = ({value, onChange, onSubmit}) => {
  const canSubmit = (value !== '')
  return (
    <div className='Todo-input'>
      <input type='text' value={value} onChange={onChange} />
      <input type='button' disabled={!canSubmit} value='Add Item' onClick={onSubmit} />
    </div>
  )
}
TodoInput.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func
}

export default TodoInput
