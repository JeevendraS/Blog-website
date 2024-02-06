import React, { useState, useEffect } from 'react'
import { PostCard, Container } from '../components'
import service from '../appwrite/Config'

function AllPost() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        service.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setLoading(false)
            }
        })
    }, [])

    if (loading) {
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
    }
    return (
        <div className='w-full py-8 '>
            <Container>
                <div className='flex flex-wrap min-h-[70vh]'>
                    {posts.map((post) => (
                        <div className='p-2 w-1/4' key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost