import React from 'react'
import Bio from './Bio';
import IGallery from './IGallery';

const ProfileFeed = ({posts, profile}) => {
  return (
    <main className=' dark:bg-black h-screen md:mx-auto m-0 p-0'>
        <section className='max-w-4xl dark:text-white items-center mx-0 lg:mx-auto lg:min-w-[950px] w-full'>
            <Bio profile={profile}/>
        </section>
        <section className='max-w-4xl items-center mx-0 lg:mx-auto lg:min-w-[950px] w-full'>
            <IGallery posts={posts} profile={profile}/>
        </section>
    </main>
  )
}

export default ProfileFeed;
