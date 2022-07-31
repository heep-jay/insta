import React from 'react'
import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from '../firebase'
import { Header, Feed, Modal, ProfileFeed } from '../components';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../atoms/themeAtom';
import Head from 'next/head';



const UserDetails = ({username}) => {
    console.log(username)
    const [darkMode, setDarkMode] = useState(false);
    const [mode, setMode] = useState('dark');
    const [theme, setTheme] = useRecoilState(themeState)
  
  
      useEffect(() => {
        if (typeof window !== "undefined") {
  
           
            setMode(window.localStorage.getItem('mode'))
            // console.log({mode})
          
         
        }
      
        
      }, [mode, theme])

    
  return (
    <>
    <div className={`${mode} w-full`}>
    <div className=" bg-gray-50 dark:bg-black h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Insta App</title>
        <link rel="icon" href="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
      </Head>
      <Modal/>
      {/* Header */}
      <Header/>
     <ProfileFeed user={username}/>
      
    </div>
    </div>
    
    </>
        
    
  )
}

export default UserDetails;

export async function getStaticProps({ params }) {
    let snapshots =[];
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("username", "==", params?.username));
    await getDocs(q).then((snap) => {
        snapshots =  snap.docs
        snapshots.map((snapshot) => ( snapshot.data()

        
      ))
     snapshots = JSON.parse(JSON.stringify(snapshots))
    }
      
    )
     
 
    return {
      props: {
        username: snapshots,
      }
    };
  }

  export async function getStaticPaths() {
    let snapshots = [];
    let username = ''
    const postsRef = collection(db, "posts");
    const q = query(postsRef,  orderBy('timestamp', 'desc'));
      await getDocs(q).then((snap)=> {
         snapshots = snap.docs;
         console.log(snapshots)
         snapshots.map((snapshot) => (

           console.log(snapshot.data().username)

         ))
    })
 
 
    return {
      paths: snapshots.map((snapshot) => ({params:{username: snapshot.data().username }})),
      fallback: false,
    };
  }
