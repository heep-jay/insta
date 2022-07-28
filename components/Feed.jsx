import React from 'react';
import Miniprofile from './Miniprofile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions'

const Feed = () => {
  return (
    <main className='grid max-w-lg h-screen mx-auto grid-cols-1 md:grid-cols-2 md:max-w-lg lg:grid-cols-3 lg:max-w-4xl xl:max-w-4xl'>
      {/* Section */}
      <section className='col-span-1 md:col-span-2 xl:col-span-2'>   
        {/* stories */}
        <Stories/>

        {/* post */}
        <Posts/>
      </section>
      {/* Section 2 */}
      <section className="hidden lg:inline-grid xl:col-span-1  -ml-16 mt-6 p-5">
        <div className='fixed top-30 '>
            {/* Mini Profile */}
          <Miniprofile/>
          {/* Suggestion */}
          <Suggestions/>
        </div>
        
      </section>
      
    </main>
  )
}

export default Feed