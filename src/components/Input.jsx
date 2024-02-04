import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className={`inline-block mb-1 pl-1 `} htmlFor={id}>{label}</label>
            }
            <input 
            style={{ caretColor: 'gray' }}
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 border-blue-200 duration-300 border w-full ${className}`} ref={ref} {...props}
            />
        </div>
    )
})

export default Input