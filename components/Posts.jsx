import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Post from './Post'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
            {
                userId: faker?.datatype.uuid(),
                username: faker?.internet.userName(),
                email: faker?.internet.email(),
                avatar: faker?.image.avatar(),
                id: i,
                caption: `Flex Container Use Cases 🔥⁣ Was it useful?⁣ Let me know in the comments 👇🏼⁣⁣ —————————————————⁣—⁣  Use code JOESBACK and get my CSS ebook for just £9 (for a limited time only, available through my website) 🚀 ⚠️ New Things ⚠️⁣ - 300+ pages⁣
                - 250+ use cases⁣
                - 27 chapters⁣
                - 1k+ annotations⁣
                - Property and feature usage explained from the ground up⁣
                - Extra animation and transition use cases in source code⁣
                - Many of my Instagram examples (since first release) provided in source code`
              }

        ))
        setPosts(suggestions)
    
      console.log(suggestions)

    }, [])
  return (
    <div className=''>
        {posts.map((post)=> (
            <Post key={post.id} id={post.id} username={post.username} userImg={post.avatar} caption={post.caption} img={post.avatar} />
        ))}

    </div>
  )
}

export default Posts