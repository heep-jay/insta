import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

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
      <section className="hidden lg:inline-grid xl:col-span-1 bg-black h-screen -ml-16 mt-5">
        
        {/* Mini Profile */}
        {/* Suggestion */}
      </section>
      
    </main>
  )
}

export default Feed