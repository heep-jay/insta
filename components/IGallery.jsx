import React from 'react'
import { useState } from 'react';

const IGallery = ({user}) => {
 user.map((user)=> (
  console.log(user._document.data.value.mapValue.fields.image)
 ))

  
  return (
    <div className='grid grid-cols-3 space-y-2 sm:space-x-2 space-x-1 items-center justify-center p-5'>
      {user.map((u)=> (
        <div
          className='col-span-1 mx-auto my-a '
        >
          <img src={u._document.data.value.mapValue.fields.image.stringValue} className=' h-[159px] w-[159px] object-cover sm:h-[221px] sm:w-[221px]  md:h-[291px] md:w-[291px] lg:h-[293px] lg:w-[293px] '  alt='' />
        </div>
      ))}
      
      

    </div>
  )
}

export default IGallery