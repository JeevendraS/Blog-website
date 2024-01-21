import React from 'react'

function Button({
    children,
    type='button',
    bgColor= 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...porps 
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...porps}>{children}</button>
  )
}

export default Button