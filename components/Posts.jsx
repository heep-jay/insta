import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import{ db, storage } from '../firebase'
import Post from './Post'
import { collection, onSnapshot , orderBy, query } from 'firebase/firestore';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(
      () => onSnapshot (
              query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                (snapshot) => {
                  setPosts(snapshot.docs)
                  
                }),     
      [db]);
      
  return (
    <div className=''>
        {posts.map((post)=> (
            <Post key={post.id} id={post.id} username={post.data().username} userImg={post.data().profileImg} caption={post.data().caption} img={post.data().image} timestamp={post.data().timestamp.toDate()} />
        ))}

    </div>
  )
}

export default Posts