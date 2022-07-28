import React, { useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegComment } from 'react-icons/fa';
import {  HeartIcon, EmojiHappyIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { BsBookmark } from 'react-icons/bs';

const Post = ({id, caption, username, userImg, img,  }) => {
  const [showmore, setShowmore] = useState(false)

  return (
    <div className='my-4 bg-white border max-w-lg border-gray-200 shadow-sm rounded-lg'>
      {/* Header*/}
      <div className="flex items-center p-1 border-b border-gray-200">
        <img 
          src={userImg} 
          alt="user-image"
          className='w-10 h-10 mr-3 object-contain rounded-full  border border-gray-200'
        />
        <p className='flex-1 text-sm font-medium'>{username}</p>
        <HiOutlineDotsHorizontal className='h-5 mr-2 text-lg'/>
      </div>
      {/* Image */}
      <img 
        src={img} 
        alt="post-photo"
        className='w-full object-contain'
      />
      {/* Buttons */}
      <div className='bg-white flex items-center  p-2'>
        <div className='flex space-x-4 items-center flex-1'>
          <HeartIcon className='btn'/>
          <FaRegComment className='btn w-6 h-6'/>
          <PaperAirplaneIcon className='btn rotate-45 '/>
        </div>
        
        <div>
          <BsBookmark className='btn w-6 h-6'/>
        </div>
        
      </div>
      {/* Likes counter */}
      <p className='p-2 text-xs font-semibold'>570 likes</p>
      {/* Caption */}
      <p className='p-2 text-xs'>
        <span className='font-semibold'>{username} </span>
        {showmore ? caption : `${caption?.substring(0, 35)}... `}{' '}
        <button
          className='text-gray-400' 
          type='button'
          onClick={()=> setShowmore(!showmore)}
          
          >{showmore ? "less" : "more"}</button>
      </p>
      {/* Comments */}
      {/* InputBox */}
      <form className='flex items-center p-3 text-xs'>
        <EmojiHappyIcon className='btn mr-3'/>
        <input 
          	type="text" 
            placeholder='Add a Comment'
            className='border-none outline-none flex-1'
          />
        <button className='text-blue-300 font-semibold'>Post</button>
      </form>
    </div>
  )
}

export default Post