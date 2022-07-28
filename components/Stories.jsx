import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story'
// import faker from 'faker'


const Stories = () => {
    const [users, setUsers] = useState([])

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
    
      console.log(suggestions)
    }, [])
     
    
  return (

    <div className='flex scrollbar-thin scrollbar-thumb-black bg-white space-x-2 p-6 mt-6 max-w-lg border border-gray-200 rounded-lg overflow-x-scroll'>
        {users.map((userprofile) => (
            <Story key={userprofile?.id} img={userprofile?.avatar} username={userprofile?.username} />
        ))}
    </div>
  )
}

export default Stories