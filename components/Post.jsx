import React, { useEffect, useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegComment } from 'react-icons/fa';
import {  HeartIcon, EmojiHappyIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { BsBookmark } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Post = ({id, caption, username, userImg, img,  }) => {
  const [showmore, setShowmore] = useState(false);
  const {data: session} = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(
    () => onSnapshot (
            query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')),
              (snapshot) => {
                setComments(snapshot.docs)
                
              }),     
    [db]);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentTosend = comment;
    
    setComment('');

    await addDoc(collection(db, 'posts', id , 'comments'), {
      comment: commentTosend,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    })

  }
  console.log(comments)
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
      {session && (
        <div className='bg-white flex items-center border-t p-2'>
        <div className='flex space-x-4 items-center flex-1'>
          <HeartIcon className='btn'/>
          <FaRegComment className='btn w-6 h-6'/>
          <PaperAirplaneIcon className='btn rotate-45 '/>
        </div>
        
        <div>
          <BsBookmark className='btn w-6 h-6'/>
        </div>
        
      </div>
      )}
      
      
      {/* Likes counter */}
      <p className='p-2 text-xs font-semibold'>570 likes</p>
      {/* Caption */}
      <p className='p-2 text-xs'>
        <span className='font-bold text-gray-600'>{username} </span>
        {showmore ? caption : `${caption?.substring(0, 35)}... `}{' '}
        <button
          className='text-gray-400' 
          type='button'
          onClick={()=> setShowmore(!showmore)}
          
          >{showmore ? "less" : "more"}</button>
      </p>
      {/* Comments */}
      {comments.length > 0 && (
      <>
      
        <h1 className='text-xs ml-2 font-medium text-gray-400'>View all {comments.length} {" "} comments</h1>
        <div className="p-2 h-12 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment)=> (
            <div key={comment?.id} className='flex items-center space-x-2 mb-3'>
                {/* <img 
                  src={comment?.data()?.userImg}
                  className='h-7 rounded-full'
                /> */}
                <p className='text-xs flex-1'>{" "}<span className='font-bold text-gray-600'>{comment.data().username} </span>{comment.data().comment}</p>
            </div>
          ))}
        </div>
        </>
      )}
      {/* InputBox */}
      {session && (
        <form 
          className='flex items-center p-3 text-xs border-t'
          
        >
        <EmojiHappyIcon className='btn mr-3'/>
        <input 
          	type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Add a Comment'
            className='border-none outline-none flex-1'
          />
        <button onClick={sendComment} type='sumbmit' disabled={!comment.trim()} className='text-blue-300 font-semibold'>Post</button>
      </form>
      )}
      
    </div>
  )
}

export default Post