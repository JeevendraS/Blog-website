import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
    return loader ? (
        <div className='bg-gray-100 min-h-[71vh] grid '>
            <div className='loader place-self-center ease-linear rounded-full border-8 border-t-8 border-t-blue-500 animate-spin h-24 w-24'></div>
        </div>
    ) : <>{children}</>
}

