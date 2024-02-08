import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/Config';
import { Button, Container } from '../components';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux'


function Post() {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAuther = post && userData ? post.userId === userData.$id : false

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post)
                else navigate('/')
            });
        } else navigate('/')
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate('/');
            };
        });
    };
    return post ? (
        // <div className='py-8' >
        //     <Container>
        //         <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
        //             <img
        //                 src={service.getFilePreview(post?.featuredImage)}
        //                 alt={post?.title}
        //                 className='rounded-xl'
        //             />
        //             {isAuther && (
        //                 <div className='absolute right-6 top-6'>
        //                     <Link to={`/edit-post/${post.$id}`}>
        //                         <Button
        //                             bgColor='bg-green-500'
        //                             className='mr-3'
        //                         >
        //                             Edit
        //                         </Button>
        //                     </Link>
        //                     <Button
        //                         bgColor='bg-red-500'
        //                         onClick={deletePost}
        //                     >
        //                         Delete
        //                     </Button>
        //                 </div>
        //             )}
        //         </div>
        //         <div className='w-full mb-6'>
        //             <h1 className='text-2xl font-bold'>{post.title}</h1>
        //         </div>
        //         <div className='browser-css'>{parse(post.content)}</div>
        //     </Container>
        // </div>

        <div className="bg-blue-200 min-h-screen  py-8">
            <Container>
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden relative shadow-lg py-2">
                        <img
                            src={service.getFilePreview(post?.featuredImage)}
                            alt={post?.title}
                            className="w-full max-h-[90vh] object-contain rounded-t-lg rounded-lg "
                        />
                        {isAuther && (
                            <div className='absolute right-6 top-6'>
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        bgColor='bg-green-500'
                                        className='mr-3'
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor='bg-red-500'
                                    onClick={deletePost}
                                >
                                    Delete
                                </Button>
                            </div>
                        )}
                        <div className="p-6">
                            <h1 className="text-3xl font-bold mb-4 text-gray-800">
                                {post.title}
                            </h1>
                            <p className="text-gray-700 leading-relaxed">
                                {parse(post.content)}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="bg-gray-200 px-6 py-4 flex justify-between items-center">
                            <div className="flex items-center">
                                <img src={service.getFilePreview(post?.featuredImage)} alt="Avatar" className="w-10 h-10 rounded-full" />
                                <p className="text-sm text-gray-700 ml-2">Jeevendra Singh</p>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) :  (
        <div className="max-w-3xl mx-auto my-6  bg-white rounded-lg overflow-hidden shadow-lg animate-pulse">
          <div className="h-[60vh] bg-blue-300"></div>
          <div className="p-6">
            <div className="h-6 w-2/3 bg-blue-300 mb-4"></div>
            <div className="h-4 w-1/2 bg-blue-300 mb-2"></div>
            <div className="h-4 w-3/4 bg-blue-300"></div>
          </div>
          <div className="bg-gray-200 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-blue-300 rounded-full"></div>
              <div className="h-4 w-20 bg-blue-300 ml-2"></div>
            </div>
            <div className="h-10 w-20 bg-blue-300"></div>
          </div>
        </div>
      );
}

export default Post