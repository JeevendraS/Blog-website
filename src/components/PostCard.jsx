import React from 'react'
import service from '../appwrite/Config'
import { Link } from 'react-router-dom'



function PostCard({$id, title, featuredImage}) {
  // return (
  //   <Link to={`/post/${$id}`}>
  //       <div className='w-full bg-gray-100 rounded-xl p-4' style={{ caretColor: 'transparent' }}>
  //           <div className='w-full justify-center mb-4'>
  //               <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
  //           </div>
  //           <h2
  //           className='text-xl font-bold'>{title}</h2>
  //       </div>
  //   </Link>
  // )
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg shadow-neutral-500">
      <img className="w-full" src={service.getFilePreview(featuredImage)} alt="Card" />
      <div className="px-6 py-4 border-blue-500">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
}

export default PostCard