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
    <div className='py-8'>
        <Container>
            <PostFrom post={posts}/>
        </Container>
    </div>
  ):null
}

export default EditPost