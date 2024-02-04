import React from 'react'

function Logo({width='', className="text-white"}) {

  return (
    <div className={`flex items-center justify-center cursor-pointer w-[${width}]`}>
      <div className=" rounded-lg ">
        <span className={`text-3xl font-bold ${className}`} style={{ caretColor: 'transparent' }}>JeeTalk</span>
      </div>
    </div>
  );
}

export default Logo