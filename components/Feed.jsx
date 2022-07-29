import React from 'react';
import Miniprofile from './Miniprofile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import { signIn, signOut, useSession } from 'next-auth/react';

const Feed = () => {
  const {data : session } = useSession();
  return (
    <main className={`grid max-w-lg h-screen mx-auto grid-cols-1 laptop:grid-cols-3 md:max-w-3xl lg:grid-cols-3 lg:max-w-4xl xl:max-w-4xl ${!session && '!grid-cols-1 !max-w-lg'}`}>
      {/* Section */}
      <section className='col-span-1 md:col-span-2 xl:col-span-2 max-w-[470px] mx-auto'>   
        {/* stories */}
        <Stories/>

        {/* post */}
        <Posts/>
      </section>
      {/* Section 2 */}
      <section className="hidden tablet:hidden  laptop:inline-grid xl:col-span-1 md:col-span-1 laptop:-ml-[2.5rem] miniTv:-ml-[3.5rem]  mt-6 p-5">
        <div className='fixed top-30 '>
            {/* Mini Profile */}
            {session && (
              <>
               <Miniprofile/>
                {/* Suggestion */}
              <Suggestions/>
              </>
            )}
         
        </div>
        
      </section>
      
    </main>
  )
}

export default Feed