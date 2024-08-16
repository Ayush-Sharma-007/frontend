import React from 'react'

const Button = ({children}) => {
  return (
    <button className='text-white border border-black bg-gray-700 rounded px-4 py-2'>
        {children}
    </button>
  )
}

export default Button
