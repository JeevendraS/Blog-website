import React from 'react'

function Logo({width='100px'}) {

  return (
    <div className="flex items-center justify-center cursor-pointer">
      <div className=" rounded-lg ">
        <span className="text-white text-3xl font-bold" style={{ caretColor: 'transparent' }}>JeeTalk</span>
      </div>
    </div>
  );
}

export default Logo