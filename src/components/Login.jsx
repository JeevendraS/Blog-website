import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as storeLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/Auth'
import { useForm } from 'react-hook-form'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')
    const [spin, setSpin] = useState(false)

    const login = async (data) => {
        setError('')
        setSpin(true)
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(storeLogin(userData))
                setSpin(false)
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
            setSpin(false)
        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 shadow-md rounded-xl border p-5 border-black/10`}>
                <h2 className='text-center text-2xl font-bold leading-tight '>Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60' >
                    Don&apos;t have any account?&nbsp;
                    <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline' >
                        Sign Up
                    </Link>
                    {error && <p className='text-red-500 text-center mt-8'>{error}</p>}
                </p>
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label='Email:'
                            placeholder='Enter Your email'
                            type='email'
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label='Password:'
                            type='password'
                            placeholder="Enter your password"
                            {...register('password', {
                                required: true
                            })}
                        />
                        <Button
                            type='submit'
                            className='w-full font-semibold'
                        > {
                            spin?<div className='flex justify-center'>
                            <div className="w-[24px] h-[24px] border-[3px] border-transparent border-gray-200 border-t-white rounded-full animate-spin border-b-white border-l-white"></div>
                            </div>:<>Sign in</>
                        }
                        </Button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login