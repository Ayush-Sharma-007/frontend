import React from 'react'

const Input = ({ label, type, id, disabled = false}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} disabled={disabled} className='block w-full border-2 border-gray-500 py-1 px-3 rounded' />
    </div>
  )
}

export default Input
