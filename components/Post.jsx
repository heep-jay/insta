import React, { useEffect, useState } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FaRegComment } from 'react-icons/fa';
import { IoPaperPlaneOutline } from "react-icons/io5";
import {  HeartIcon, EmojiHappyIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import {  HeartIcon as  HeartIconFilled } from '@heroicons/react/solid';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment'

const Post = ({id, caption, username, userImg, img,  }) => {
  const [showmore, setShowmore] = useState(false);
  const {data: session} = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [saves, setSaves] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  useEffect(
    () => onSnapshot (
            query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')),
              (snapshot) => {
                setComments(snapshot.docs)
                
              }),     
    [db, id]);
  useEffect(
      () => onSnapshot(
              collection(db, 'posts', id, 'likes'),
                (snapshot) => {
                  setLikes(snapshot.docs)
                  
                }),     
      [db, id]);

  useEffect(
        () => 
          setHasLiked
            (likes?.findIndex
              ( (like) => (like.id === session?.user?.uid)) !== -1 )  
      , [likes]);
    
      useEffect(
        () => onSnapshot(
                collection(db, 'posts', id, 'saved'),
                  (snapshot) => {
                    setSaves(snapshot.docs)
                    
                  }),     
        [db, id]);
      

      useEffect(
        () => 
          setHasSaved
            (saves.findIndex
              ( (save) => (save.id === session?.user?.uid)) !== -1 )  
      , [saves]);

    


  const likePost = async () =>{

    if(hasLiked){
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));

    } else{
      await setDoc(doc(db, 'posts', id, 'likes', session?.user?.uid), {
        username: session.user.username
      })
    }
   

  }

  const savePost = async () =>{
    if(hasSaved){
      
      await deleteDoc(doc(db, 'posts', id, 'saved', session.user.uid));
    } else{
        await setDoc(doc(db, 'posts', id, 'saved', session?.user?.uid), {
          savedBy: session.user.username,
          postedBy: username,
          caption:caption ,
          profileImg: userImg,
          image: img,
          timestamp: serverTimestamp(),})
      }
    }

  const sendComment = async (e) => {
    e.preventDefault();
    const commentTosend = comment;
    
    setComment('');

    await addDoc(collection(db, 'posts', id , 'comments'), {
      comment: commentTosend,
      username: session?.user?.username,
      userImg: session?.user?.image,
      timestamp: serverTimestamp(),
    })

  }
  
  return (
    <div className='my-4 bg-white border max-w-lg border-gray-200 shadow-sm rounded-lg'>
      {/* Header*/}
      <div className="flex items-center p-2 py-3 border-b border-gray-200">
        <img 
          src={userImg} 
          alt="user-image"
          className='w-8 h-8 mr-3 object-contain rounded-full  border border-gray-200'
        />
        <p className='flex-1 text-sm font-medium'>{username}</p>
        <HiOutlineDotsHorizontal className='h-5 mr-2 text-xl'/>
      </div>
      {/* Image */}
      <img 
        src={img} 
        alt="post-photo"
        className='w-full bg-black object-contain max-h-[600px]'
      />
      {/* Buttons */}
      {session && (
        <div className='bg-white flex items-center border-t p-2'>
        <div className='flex space-x-4 items-center flex-1'>
          {hasLiked ? (<HeartIconFilled onClick={likePost} className='btn hover:text-red-600 text-red-600'/>) : (<HeartIcon onClick={likePost} className='btn'/>)}
          
          <FaRegComment className='btn w-6 h-6'/>
          <IoPaperPlaneOutline className='btn w-6 h-6 '/>
        </div>
        {hasSaved ?
          (<div>
          <BsBookmarkFill onClick={savePost} className='btn w-5 h-5 hover:text-black'/>
          </div>) : 
          (<div>
          <BsBookmark onClick={savePost} className='btn w-5 h-5'/>
         </div>)}
        
        
      </div>
      )}
      
      
      {/* Likes counter */}
      {likes?.length > 0 && (
        <p className='p-2 text-xs ml-2 font-semibold'>{likes?.length}{" "}{likes?.length > 1 ? 'likes': 'like'}</p>
      )}
      
      {/* Caption */}
      <p className='p-2 ml-2 text-xs'>
        <span className='font-bold text-gray-600'>{username} </span>
        {showmore ? caption : `${caption?.substring(0, 35)}... `}{' '}
        <button
          className='text-gray-400' 
          type='button'
          onClick={()=> setShowmore(!showmore)}
          
          >{showmore ? "less" : "more"}</button>
      </p>
      {/* Comments */}
      {comments?.length > 0 && (
      <>
      
        <h1 className='text-xs ml-2 p-2 font-medium text-gray-400'>View all {comments?.length} {" "} comments</h1>
        <div className="p-2 h-12 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments?.map((comment)=> (
            <div key={comment?.id} className='flex items-center space-x-2  ml-2 mb-3'>
                {/* <img 
                  src={comment?.data()?.userImg}
                  className='h-7 rounded-full'
                /> */}
                <p className='text-xs flex-1'>{" "}<span className='font-bold text-gray-600'>{comment?.data().username} </span>{comment?.data().comment}</p>
                <Moment className='text-xs text-gray-500' fromNow>{comment?.data()?.timestamp?.toDate()}</Moment>
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