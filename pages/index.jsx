import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../atoms/themeAtom';
import { Header, Feed, Modal } from '../components'


const Home = () => {
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
