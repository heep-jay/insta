import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';
import { FiSettings } from 'react-icons/fi';
import { BsBookmark, BsGrid3X3} from 'react-icons/bs';
import { MdPersonPinCircle} from 'react-icons/md';
import { useEffect } from 'react';
import { useState } from 'react';


const Bio = ({user}) => {
    const [userName, setUserName] = useState('')
    const [image, setImage] = useState('');
    const {data: session} = useSession();

    useEffect(() => {
        user.map((user)=> {
            setUserName(user?._document?.data?.value?.mapValue?.fields?.username?.stringValue)
            setImage(user?._document?.data?.value?.mapValue?.fields?.profileImg?.stringValue)
            
        }
            
            
           )
    }, [user])
    
   

  return (
    <div className='w-full'>
        <div>

            <div className='hidden md:grid md:grid-cols-4 p-3 '>
                <div className='col-span-1 w-full'>
                    <img 
                        src={image} 
                        alt="profile-photo"
                        className='h-36 w-36 rounded-full'
                    />
                </div>
                    <div className='col-span-3 w-full ml-10 space-y-7'>
                        <div className='flex space-x-5 items-center'>
                            <h1 className='text-2xl font-thin'>{userName}</h1>
                            <button className='text-sm font-semibold border border-gray-400 py-1 px-3 rounded-sm'>Edit Profile</button>
                            <FiSettings className='navBtn'/>
                        </div>
                        <div className='flex space-x-9'>
                            <p><span className='font-semibold'>3</span> posts</p>
                            <p className='cursor-pointer'><span className='font-semibold'>851</span> followers</p>
                            <p className='cursor-pointer'><span className='font-semibold'>623</span> following</p>
                        </div>
                        <div className='text-normal'>
                            <p className='font-semibold'>👑👑Djubreal 🔥🔥</p>
                            <p className='uppercase'>*February* *Born*  </p>
                            <p>Wildling 😋</p>
                        </div>
                    
                    </div>
                    <div className='flex mx-auto items-center col-span-4 space-x-20 mt-8 border-t w-full justify-center relative'>
                        <div className='flex items-center text-xs font-bold mt-4 tracking-wider  cursor-pointer'>

                            <BsGrid3X3 className='mr-1'/>
                            POSTS
                            <div className='border border-black absolute top-0 w-16'></div>
                        </div>
                        <div className='flex items-center mt-4 text-xs font-bold tracking-wider cursor-pointer'>
                            <BsBookmark className='mr-1'/>
                            SAVED
                        </div>
                        <div className='flex items-center text-xs font-bold mt-4 tracking-wider cursor-pointer'>
                            <MdPersonPinCircle className='mr-1'/>
                            TAGGED
                        </div>
                    </div>
                
        </div>
        </div>
       
        




        <div className='md:hidden flex-col w-full'>
        <div className='flex w-full mt-1 mb-2 p-3 items-center'>
        <div className=''>
            <img 
                src={session?.user?.image} 
                alt="profile-photo"
                className='h-[75px] w-[75px] rounded-full'
             />
         </div>
           
        <div className='ml-5'>
            <div className='flex flex-col justify-start'>
                <div className='flex items-center'>
                <h1 className='text-2xl font-thin mr-4 p-2'>{session?.user?.username}</h1>
                <FiSettings className='navBtn'/>
                </div>
            </div> 
            <button 
                className='text-sm font-semibold border border-gray-300 py-1 px-24 rounded-sm'
            >
                Edit Profile
            </button>
        </div>
        </div>
        <div className='text-sm p-3'>
            <p className='font-semibold'>👑👑Djubreal 🔥🔥</p>
            <p className='uppercase'>*February* *Born*  </p>
            <p>Wildling 😋</p>
         </div>
        
            <div className='flex space-x-9 border h-16 justify-center items-center w-full'>
                <p><span className='font-semibold'>3</span> posts</p>
                <p><span className='font-semibold'>851</span> followers</p>
                <p><span className='font-semibold'>623</span> following</p>
            </div>
          <div className='flex justify-around h-12 border items-center '>
            <BsGrid3X3 className='navBtn'/>
            <BsBookmark className='navBtn'/>
            <MdPersonPinCircle className='navBtn'/>
          </div>
          
        </div>
    
 </div>
    
  )
}

export default Bio