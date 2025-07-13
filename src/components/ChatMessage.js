import React from 'react'

const ChatMessage = ({name, message,img}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img src={img} alt="User avatar" className="w-8 h-8 rounded-full object-cover"/>
      <span className='px-3  pr-4 font-semibold '>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
