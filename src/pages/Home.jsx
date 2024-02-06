import React, { useState, useEffect } from 'react'
import service from '../appwrite/Config'
import { useSelector } from 'react-redux'
import { Container, PostCard } from '../components'
import { useNavigate, useParams } from 'react-router-dom'

function Home() {
    const isLoggedIn = useSelector((state) => state.auth.status)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setLoading(false)
            }
        })
    }, [])
    if (isLoggedIn && loading) {
        return (
            <div className="border flex flex-wrap justify-evenly gap-y-3 rounded-md p-4 mb-4 animate-pulse">
                <div className='w-[24%]'>
                    <div className="w-full h-[50vh] bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="h-8 bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="flex justify-between">
                        <div className="h-4 w-2/3 bg-blue-300 rounded-lg"></div>
                        <div className="h-4 w-1/4 bg-blue-300 rounded-lg"></div>
                    </div>
                </div>
                <div className='w-[24%]'>
                    <div className="w-full h-[50vh] bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="h-8 bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="flex justify-between">
                        <div className="h-4 w-2/3 bg-blue-300 rounded-lg"></div>
                        <div className="h-4 w-1/4 bg-blue-300 rounded-lg"></div>
                    </div>
                </div>
                <div className='w-[24%]'>
                    <div className="w-full h-[50vh] bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="h-8 bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="flex justify-between">
                        <div className="h-4 w-2/3 bg-blue-300 rounded-lg"></div>
                        <div className="h-4 w-1/4 bg-blue-300 rounded-lg"></div>
                    </div>
                </div>
                <div className='w-[24%]'>
                    <div className="w-full h-[50vh] bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="h-8 bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="flex justify-between">
                        <div className="h-4 w-2/3 bg-blue-300 rounded-lg"></div>
                        <div className="h-4 w-1/4 bg-blue-300 rounded-lg"></div>
                    </div>
                </div>
                <div className='w-[24%]'>
                    <div className="w-full h-[50vh] bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="h-8 bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="flex justify-between">
                        <div className="h-4 w-2/3 bg-blue-300 rounded-lg"></div>
                        <div className="h-4 w-1/4 bg-blue-300 rounded-lg"></div>
                    </div>
                </div>
                <div className='w-[24%]'>
                    <div className="w-full h-[50vh] bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="h-8 bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="flex justify-between">
                        <div className="h-4 w-2/3 bg-blue-300 rounded-lg"></div>
                        <div className="h-4 w-1/4 bg-blue-300 rounded-lg"></div>
                    </div>
                </div>
                <div className='w-[24%]'>
                    <div className="w-full h-[50vh] bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="h-8 bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="flex justify-between">
                        <div className="h-4 w-2/3 bg-blue-300 rounded-lg"></div>
                        <div className="h-4 w-1/4 bg-blue-300 rounded-lg"></div>
                    </div>
                </div>
                <div className='w-[24%]'>
                    <div className="w-full h-[50vh] bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="h-8 bg-blue-300 mb-2 rounded-lg"></div>
                    <div className="flex justify-between">
                        <div className="h-4 w-2/3 bg-blue-300 rounded-lg"></div>
                        <div className="h-4 w-1/4 bg-blue-300 rounded-lg"></div>
                    </div>
                </div>
            </div>
        )
    }else if (isLoggedIn && posts.length > 0){
        return (
            <div className='w-full py-8 min-h-[75vh] bg-gray-300'>
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
    }else if(isLoggedIn && posts.length==0){
        return (
            <div className='w-full py-8  text-center bg-blue-200 min-h-[70vh]'>
                <Container>
                    <div className=' flex flex-wrap text-gray-900 font-bold text-2xl items-center justify-center h-[60vh]'>
                        There is no post
                    </div>
                </Container>
            </div>
        )
    } else {
        return (
            <div className='w-full py-8  text-center bg-blue-200 min-h-[70vh]'>
                <Container>
                    <div className=' flex flex-wrap text-gray-900 font-bold text-2xl items-center justify-center h-[60vh]'>
                        Login to read post
                    </div>
                </Container>
            </div>
        )
    }
    
}

export default Home