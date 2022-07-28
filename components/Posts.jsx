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
                caption: "This is a Post"
              }

        ))
        setPosts(suggestions)
    
      console.log(suggestions)

    }, [])
  return (
    <div>
        {posts.map((post)=> (
            <Post key={post.id} id={post.id} username={post.username} userImg={post.avatar} caption={post.caption} img={post.avatar} />
        ))}

    </div>
  )
}

export default Posts