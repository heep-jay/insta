import React from 'react'
import { useState } from 'react';
import { FaRegComment } from 'react-icons/fa';
import {  HeartIcon as  HeartIconFilled } from '@heroicons/react/solid';

const IGallery = ({user}) => {
 user.map((user)=> (
  console.log(user._document.data.value.mapValue.fields.image)
 ))

  
  return (
    <div className='grid grid-cols-3 space-y-2 sm:space-x-2 space-x-1 items-center justify-center p-0'>
      {user.map((u)=> (
        <div
          className='col-span-1 mx-auto my-auto relative '
        >
          <img src={u._document.data.value.mapValue.fields.image.stringValue} className=' h-[159px] w-[159px] object-cover sm:h-[221px] sm:w-[221px]  md:h-[291px] md:w-[291px] lg:h-[293px] lg:w-[293px]  '  alt='' />
        {/* <div className=' hidden hover:block h-[159px] w-[159px] absolute text-black z-40 top-0 left-0 bg-black opacity-50  object-cover sm:h-[221px] sm:w-[221px]  md:h-[291px] md:w-[291px] lg:h-[293px] lg:w-[293px] '>
           
          </div>
          <div className='z-50 flex absolute top-32 left-32'>
            <HeartIconFilled  className='w-11 h-11 ' />
            <FaRegComment className='w-11 h-11'/>
          </div> */}
          


        </div>
      ))}
      
      

    </div>
  )
}

export default IGallery