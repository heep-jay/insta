import React from 'react'
import Bio from './Bio';
import IGallery from './IGallery';

const ProfileFeed = ({user}) => {
  return (
    <main className=' dark:bg-black h-screen md:mx-auto m-0 p-0'>
        <section className='max-w-4xl items-center mx-0 lg:mx-auto lg:min-w-[950px] w-full'>
            <Bio user={user}/>
        </section>
        <section className='max-w-4xl items-center mx-0 lg:mx-auto lg:min-w-[950px] w-full'>
            <IGallery user={user}/>
        </section>
    </main>
  )
}

export default ProfileFeed;
