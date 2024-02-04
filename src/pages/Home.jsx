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
        <div className='w-full py-8  text-center bg-blue-200 min-h-[70vh]'>
            <Container>
                <div style={{ caretColor: 'transparent' }} className=' flex flex-wrap text-gray-900 font-bold text-2xl items-center justify-center h-[60vh]'>
                   Login to read post
                </div>
            </Container>
        </div>
    )
  }
  return (
    <div className='w-full py-8 bg-gray-300'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home