import React from 'react'

const Button = ({name}) => {
  return (
    <div > 
        <button className='rounded text-sm   bg-amber-600 text-white font-bold border-[1px] hover:bg-amber-700 px-4 py-3 sm:px-4 md:px-6 lg:px-8 xl:px-10  sm:text-sm sm:py-4 cursor-pointer '>
            {name}
        </button>
    </div>
  )
}

export default Button