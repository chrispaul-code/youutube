import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 py-1 m-2 bg-gray-200 rounded-lg font-semibold text-sm '>{name}</button>
    </div>
  )
}

export default Button
