import React, {useState, useEffect} from 'react'
import service from '../appwrite/Config'
import {Container,PostCard} from '../components'
import { useNavigate, useParams } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
  if(posts.length === 0){
    return (
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full '>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            Login to read Posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    )
  }
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home