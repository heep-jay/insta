import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story'
import { useSession } from 'next-auth/react';
// import faker from 'faker'


const Stories = () => {
    const [users, setUsers] = useState([]);
    const {data: session } = useSession();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => (
            {
                userId: faker?.datatype.uuid(),
                username: faker?.internet.userName(),
                email: faker?.internet.email(),
                avatar: faker?.image.avatar(),
                id: i
              }

        ))
        setUsers(suggestions)
    
    }, [])
     
    
  return (

    <div className='flex scrollbar-thin max-w-[482px] scrollbar-thumb-black dark:scrollbar-thumb-white dark:bg-black dark:border-slate-800 bg-white space-x-3 p-6 mt-6 border border-gray-200 rounded-xl overflow-x-scroll'>
        {session && (
          <Story key={session?.user.uid} img={session?.user?.image} username={session?.user?.username} />
        )}
        {users.map((userprofile) => (
            <Story key={userprofile?.id} img={userprofile?.avatar} username={userprofile?.username} />
        ))}
    </div>
  )
}

export default Stories