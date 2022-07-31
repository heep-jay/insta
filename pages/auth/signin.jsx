import React from 'react';
import Image from 'next/image'
import { getProviders, signIn } from "next-auth/react"
import mypic from '../../public/auth.png'

const signin = ({providers}) => {

    const signInWith = (provider) =>{
        signIn(provider.id, {callbackUrl : '/'})
    }
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-2 max-w-lg lg:max-w-3xl mx-auto'>

        
        {/* left */}
        <div className='hidden lg:inline-grid lg:col-span-1 mx-auto mt-24'>
            <Image 
                className='w-full h-full'
                src={mypic} alt="login-image" 

            
            />

        </div>
        {/* right */}
        <div className=' mx-auto '>
        <div className='col-span-1 border border-gray-300 shadow-sm items-center justify-center max-w-md mt-32 py-3 px-20 space-y-5'>
            <div className='cursor-pointer '>
                <img  
                    src="https://blackhillsballoons.com/wp-content/uploads/2021/01/Instagram-Logo.png"
                    className='h-32 w-44 object-contain'
                />
            </div>
            <div className='cursor-pointer mx-auto mb-5'>
                <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                    alt=""
                    className='rounded-full h-20 w-20 object-cover mx-auto -mt-7'
                />
            </div>
            
            <div className=''>
                {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button 
                        className='text-sm font-semibold text-white bg-blue-500 py-2 px-2 rounded-md'
                        onClick={signInWith(provider)}>
                    Continue with {provider.name}
                    </button>
                    
                </div>
                ))}
            </div>
            <div className='ml-7'>
            <button className='text-sm text-center mx-auto text-blue-400 font-semibold'>Remove Account</button>
            </div>
            
               
            
        </div>
        	 <div className='text-center text-gray-500 text-sm border items-center justify-center max-w-md mt-3 py-3 px-20 space-y-2  border-gray-300 shadow-sm'>
                <p>Not you ?</p>
                <p><span className='text-blue-400 font-semibold'>Switch Accounts </span> or <span className='text-blue-400 font-semibold'>Sign Up</span></p>
            
            </div> 
            <p className='text-center'>Get the app</p>
        </div>
        
    </div>
    
  </>
  )
}

export default signin;
export async function getServerSideProps (){
    const providers = await getProviders();

    return {
        props : { 
            providers,
        }
    }
}