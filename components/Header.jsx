import React from 'react';
import Image from 'next/image';
import { SearchIcon, HeartIcon } from '@heroicons/react/outline';
import {HomeIcon} from '@heroicons/react/solid'

import { RiMessengerLine } from 'react-icons/ri';
import { CgAddR } from 'react-icons/cg';
import { ImCompass2 } from 'react-icons/im';
import { BsPersonCircle } from 'react-icons/bs';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil';



const Header = () => {
    const {data: session } = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);
    console.log(session)
  return (
    
    <div className=' border-b border-gray-300 shadow-sm bg-white  sticky-top-0 z-50 pb-3 lg:pb-0'>
        <div className="flex justify-between mt-4 lg:mt-0 bg-white max-w-4xl items-center mx-5 lg:mx-auto ">
             {/* Left */}
            <div className='relative hidden lg:inline-grid h-20 w-24 cursor-pointer mr-40 '>
                <Image
                    onClick={()=> router.push('/')}
                    src="https://blackhillsballoons.com/wp-content/uploads/2021/01/Instagram-Logo.png"
                    layout='fill'
                    objectFit='contain'
                />

            </div>
            <div className='relative lg:hidden inline-grid h-10 w-10 flex-shrink-0 cursor-pointer mr-4 md:mr-40'>
                <Image
                    onClick={()=> router.push('/')}
                    src="https://links.papareact.com/jjm"
                    layout='fill'
                    objectFit='contain'
                />

            </div>

            {/* Middle */}
            {session ? ( 
                
            <div className='relative flex items-center flex-1 sm:mr-2'>
                <div className="  p-2 hidden sm:inline-grid border w-80 rounded-md bg-[#efefef]">
                    <div className=' absolute inset-y-0 flex items-center pointer-events-none pl-3'><SearchIcon className='h-4 w-4 text-gray-500' /></div>
                    <input type="text" placeholder='Search..' className='outline-none bg-inherit font-extralight block w-full pl-10 sm:text-sm' />
                </div>
            </div>) :(
            <div className='relative flex items-center flex-1 sm:mr-2'>

            </div> )}
           
            
            {/* Right */}
            <div className=" flex items-center justify-start space-x-4">
                
                {session ? (
                    <>
                    <HomeIcon  onClick={()=> router.push('/')} className='navBtn'/>
                <div className='navBtn relative'>
                    <RiMessengerLine className='navBtn'/>
                    <div className='text-xs bg-red-500 text-white absolute w-5 h-5 text-center -top-1 -right-2 rounded-full animate-pulse'>3</div>
                </div>
                <CgAddR onClick={()=> setOpen(!open)} className='navBtn'/>
                <ImCompass2 className='navBtn rotate-180'/>
                <HeartIcon className='navBtn'/>
                <img 
                    onClick={signOut}
                    src={session?.user?.image}
                    alt="profile-photo" 
                    className='h-8 w-8 rounded-full object-cover cursor-pointer'
                />
                    </>  ) :
                     ( <button onClick={signIn}>Sign in</button>

                )}
               
            </div>
        </div>
       
    </div>
  )
}

export default Header