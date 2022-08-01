import React from 'react'
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import Image from './Image';

function IGallery({posts, profile}) {
  const [gallery, setGallery] = useState([])


  useEffect(
  () => onSnapshot (
          query(collection(db, 'posts'), where('username', "==", profile.username), orderBy("timestamp", "desc")),
            (snapshot) => {
              setGallery(snapshot.docs)
              
              
            }),     
  [db]);
 

  
  return (
    <div className='grid grid-cols-3 space-y-2 sm:space-x-2 space-x-1 items-center justify-center p-0'>
      {gallery.map((post)=> (
        
       <Image key={post.id} id={post.id} image={post.data().image} />

      ))}
      
      

    </div>
  )
}

export default IGallery