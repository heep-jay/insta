import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';


const Suggestions = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
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
    <div>
        <div className='flex justify-between items-center text-sm'>
            <h1 className='font-bold text-gray-400 py-3'>Suggestions For You</h1>
            <button>See All</button>
        </div>
        <div>
            {users.map((user)=>(
                <div key={user.id} className='flex justify-between max-w-[310px] items-center'>
                    <div className='flex'>
                    <img 
                        src={user.avatar} 
                        alt="" 
                        className='story w-7 h-7 my-2 object-cover border-none mr-3'
                    />
                    <div className='text-sm mr-32'>
                        <p className='font-semibold truncate'>{user.username.substring(0,10)}</p>
                        <p className='text-gray-400 text-xs'>Suggested for you</p>
                    </div>
                    </div>
                   
                    <button className='text-blue-400 text-xs font-semibold'>Follow</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Suggestions