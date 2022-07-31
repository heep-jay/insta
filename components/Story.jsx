import React from 'react'

const Story = ({img, username, }) => {
  return (
    <div className='dark:bg-black'>
        <img 
            src={img} 
            alt="user-avatar" 
            className='story'
        />
        <p className='text-xs text-center font-base mx-auto w-16 truncate dark:text-white'>{username}</p>
    </div>
  )
}

export default Story