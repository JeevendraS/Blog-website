import React, {useState, useEffect} from 'react'
import service from '../appwrite/Config'
import {Container, PostFrom} from '../components'
import { useNavigate, useParams } from 'react-router-dom'



function EditPost() {
    const [posts, setPosts] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(()=>{
        if (slug) {
            service.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    },[slug,navigate])
  return posts? (
    <div className='py-8 min-h-screen'>
        <Container>
            <PostFrom post={posts}/>
        </Container>
    </div>
  ):(
    <div className='bg-blue-200 min-h-screen grid '>
      <div className='loader place-self-center ease-linear rounded-full border-8 border-t-8 border-t-blue-500 animate-spin h-24 w-24'></div>
    </div>
  )
}

export default EditPost