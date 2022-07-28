import React from 'react'

const Story = ({img, username, }) => {
  return (
    <div className=''>
        <img 
            src={img} 
            alt="user-avatar" 
            className='story'
        />
        <p className='text-xs text-center font-extralight w-14 truncate'>{username}</p>
    </div>
  )
}

export default Story