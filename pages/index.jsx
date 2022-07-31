import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../atoms/themeAtom';
import { Header, Feed, Modal } from '../components'
import { getProviders, signIn, useSession } from "next-auth/react"
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';



const Home = () => {
  const {data: session} = useSession();
  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState('dark');
  const [theme, setTheme] = useRecoilState(themeState)
  const [userProfile, setUserProfile] = useState({})

  const profileQuery = async () =>{

    if(session){
      const q = query(collection(db,'profiles'), where ("username",  "==", `${session?.user?.username}`));
      // console.log(userProfile)
      const querySnapshot = await getDocs(q);
   
      if(!querySnapshot){
        await addDoc(collection(db, 'profiles'), {
          username: session?.user?.username,
          bio: session?.user?.bio
        })
        // console.log(userProfile)
      }
    }
   
    
  }

   useEffect( () => {

      profileQuery();
      }, [])





    useEffect(() => {
      if (typeof window !== "undefined") {

         
          setMode(window.localStorage.getItem('mode'))
          // console.log({mode})
        
       
      }
    
      
    }, [mode, theme])

    
    
  return (
    
    <div className={`${mode}`}>
         <div className=" bg-gray-50 dark:bg-black h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Insta App</title>
        <link rel="icon" href="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
      </Head>
      <Modal/>
      {/* Header */}
      <Header/>
      {/* Feed */}
      <Feed/>
      {/* Modal */}
      
    </div>
    </div>
 
  )
}

export default Home
