import React from 'react';
import { signOut, useSession } from 'next-auth/react';

const Miniprofile = () => {
  const {data: session } = useSession();
  return (
    <div className='flex justify-start items-center'>
        <img 
            src={session?.user?.image} 
            alt="" 
            className='story object-contain border-gray-400 mr-3'
        />
        <div className='text-sm mr-24'>
            <p className='font-semibold'>{session?.user?.username}</p>
            <p className='text-gray-400'>👑👑Djubreal 🔥🔥</p>
        </div>
        <button 
          onClick={signOut}
          className='text-blue-500 text-xs font-semibold'>Sign Out</button>
    </div>
  )
}

export default Miniprofile