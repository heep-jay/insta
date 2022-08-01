import React from 'react'
import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from '../firebase'
import { Header, Feed, Modal, ProfileFeed } from '../components';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../atoms/themeAtom';
import Head from 'next/head';
import { getPosts, getUsername } from '../helpers';
import { useSession } from 'next-auth/react';



const UserDetails = ({userposts, userProfile}) => {
    const {data: session} = useSession()
    const [darkMode, setDarkMode] = useState(false);
    const [mode, setMode] = useState('dark');
    const [theme, setTheme] = useRecoilState(themeState)
  
  
      useEffect(() => {
        if (typeof window !== "undefined") {
  
           
            setMode(window.localStorage.getItem('mode'))
           
          
         
        }
      
        
      }, [mode, theme])

    
  return (
    <> 
    {session ? (
       <div className={`${mode} w-full`}>
       <div className=" bg-gray-50 dark:bg-black h-screen overflow-y-scroll scrollbar-hide">
         <Head>
           <title>`{`Insta App | Profile ${userProfile.username}`}</title>
           <link rel="icon" href="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
         </Head>
         <Modal/>
         {/* Header */}
         
        <ProfileFeed posts={userposts} profile={userProfile}/>
         
       </div>
       </div>
    ): (<Header/> )}
   
    
    </>
        
    
  )
}

export default UserDetails;

export async function getStaticProps({ params }) {
  const posts =    await getPosts(params?.username)
  const username =  await getUsername(params?.username)
   
     
 
    return {
      props: {
        userposts: posts,
        userProfile: username,
      }
    };
  }

  export async function getStaticPaths() {
    let snapshots = [];
    let username = ''
    const postsRef = collection(db, "profiles");
    const q = query(postsRef);
      await getDocs(q).then((snap)=> {
         snapshots = snap.docs;
         
         snapshots.map((snapshot) => (

           console.log('yooo')

         ))
    })
    
 
    return {
      paths: snapshots.map((snapshot) => ({params:{username: snapshot.data().username }})),
      fallback: false,
    };
  }
