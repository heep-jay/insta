import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Miniprofile = () => {
  const {data: session } = useSession();
  return (
    <div className='flex justify-start items-center '>
      <Link href={`/${session?.user?.username}`}>
      <img referrerPolicy="no-referrer"
            src={session?.user?.image} 
            alt="" 
            className='story object-contain cursor-pointer border-gray-400 mr-3'
        />
      </Link>
        
        <div className='text-sm mr-24'>
            <p className='font-semibold dark:text-white'>{session?.user?.username}</p>
            <p className='text-gray-400'>👑👑Djubreal 🔥🔥</p>
        </div>
        <button 
          onClick={signOut}
          className='text-blue-500 text-xs font-semibold'>Sign Out</button>
    </div>
  )
}

export default Miniprofile