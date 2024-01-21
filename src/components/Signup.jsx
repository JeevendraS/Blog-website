import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as storeLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/Auth'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm()

    const signup = async (data) => {
        setError('')
        try {
            const user = await authService.createAccount(data)
            if (user) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(storeLogin(userData))
                navigate('/ ')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-100 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-blcok w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight '>Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60' >
                    Already have an account?&nbsp;
                    <Link to='/login' className='font-medium text-primary transition-all duration-200 hover:underline' >
                        Sign in
                    </Link>
                    {error && <p className='text-red-500 text-center mt-8'>{error}</p>}
                </p>
                <form onSubmit={handleSubmit(signup)}>
                    <div className='space-y-5'>
                        <Input
                            label='Full Name:'
                            placeholder='Enter your name'
                            {...register('name', {
                                required: true
                            })}
                        />
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
                            className='w-full'
                        >Sign up</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup