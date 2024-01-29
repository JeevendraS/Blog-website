import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/Auth'
import { Header,Footer } from './components'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block cursor-auto duration-200'>
        <Header/>
          <main>
           <Outlet/>
          </main>
        <Footer/>
      </div>
    </div>
  ):(
    <div className='bg-gray-100 min-h-screen grid '>
      <div className='loader place-self-center ease-linear rounded-full border-8 border-t-8 border-t-blue-400 animate-spin h-24 w-24'></div>
    </div>
  )
}

export default App
