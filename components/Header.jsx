import React from 'react';
import Image from 'next/image';
import { SearchIcon, HeartIcon } from '@heroicons/react/outline';
import {HomeIcon} from '@heroicons/react/solid'

import { RiMessengerLine } from 'react-icons/ri';
import { CgAddR } from 'react-icons/cg';
import { ImCompass2 } from 'react-icons/im';
import { BsPersonCircle } from 'react-icons/bs';
import { useSession } from 'next-auth/react';


const Header = () => {
    const {data: session } = useSession();
    console.log(session)
  return (
    
    <div className=' border-b border-gray-300 shadow-sm bg-white  sticky-top-0 z-50 pb-3 lg:pb-0'>
        <div className="flex justify-between mt-4 lg:mt-0 bg-white max-w-4xl items-center mx-5 lg:mx-auto ">
             {/* Left */}
            <div className='relative hidden lg:inline-grid h-20 w-24 cursor-pointer mr-40 '>
                <Image
                    src={session?.user?.image}
                    layout='fill'
                    objectFit='contain'
                />

            </div>
            <div className='relative lg:hidden inline-grid h-10 w-10 flex-shrink-0 cursor-pointer mr-4 md:mr-40'>
                <Image
                    src="https://links.papareact.com/jjm"
                    layout='fill'
                    objectFit='contain'
                />

            </div>
            {/* Middle */}
            <div className='relative flex items-center flex-1 sm:mr-2'>
                <div className="  p-2 hidden sm:inline-grid border w-80 rounded-md bg-[#efefef]">
                    <div className=' absolute inset-y-0 flex items-center pointer-events-none pl-3'><SearchIcon className='h-4 w-4 text-gray-500' /></div>
                    <input type="text" placeholder='Search..' className='outline-none bg-inherit font-extralight block w-full pl-10 sm:text-sm' />
                </div>
            </div>
            
            {/* Right */}
            <div className=" flex items-center justify-start space-x-4">
                <HomeIcon className='navBtn'/>
                <div className='navBtn relative'>
                    <RiMessengerLine className='navBtn'/>
                    <div className='text-xs bg-red-500 text-white absolute w-5 h-5 text-center -top-1 -right-2 rounded-full animate-pulse'>3</div>
                </div>
                
                <CgAddR className='navBtn'/>
                <ImCompass2 className='navBtn rotate-180'/>
                <HeartIcon className='navBtn'/>
                <img 
                    src="https://image.shutterstock.com/image-photo/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-250nw-1194497251.jpg" 
                    alt="profile-photo" 
                    className='h-8 w-8 rounded-full object-cover cursor-pointer'
                />
            </div>
        </div>
       
    </div>
  )
}

export default Header