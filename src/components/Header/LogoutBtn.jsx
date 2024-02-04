import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/Auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout()
        .then(()=>{dispatch(logout())})
    }
  return (
    <button onClick={logoutHandler} className='inline-block text-white font-semibold bg-blue-800 px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full'>Logout</button>
  )
  //this is animation of button for waiting
  // return (
  //   <div className="absolute w-10 h-10 border-4 border-transparent border-gray-200 border-t-white rounded-full animate-spin border-b-white border-l-white"></div>
  // );
}

export default LogoutBtn