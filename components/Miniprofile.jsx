import React from 'react'

const Miniprofile = () => {
  return (
    <div className='flex justify-start items-center'>
        <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
            alt="" 
            className='story object-contain border-gray-400 mr-3'
        />
        <div className='text-sm mr-24'>
            <p className='font-semibold'>heep_jay</p>
            <p className='text-gray-400'>👑👑Djubreal 🔥🔥</p>
        </div>
        <button className='text-blue-500 text-xs font-semibold'>Sign Out</button>
    </div>
  )
}

export default Miniprofile