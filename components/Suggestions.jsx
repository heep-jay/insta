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
                <div key={user.id} className='flex justify-between max-w-fit items-center'>
                    <div className='flex items-center'>
                        <img 
                            src={user.avatar} 
                            alt="" 
                            className='story w-8 h-8 my-2 object-cover border-none mr-3 cursor-pointer'
                        />
                        <div className='text-sm w-full flex-1 cursor-pointer'>
                            <p className='font-semibold truncate'>{user.username.substring(0,10)}</p>
                            <p className='text-gray-400 text-[12px] '>Followed by stephen.nso + 1 more</p>
                        </div>
                        <button className='text-blue-400 text-[12px] ml-12 font-medium '>Follow</button>
                    </div>
                   
                   
                </div>
            ))}
        </div>
    </div>
  )
}

export default Suggestions