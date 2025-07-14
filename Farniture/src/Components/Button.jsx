import React from 'react'

const Button = ({name}) => {
  return (
    <div > 
        <button className='rounded bg-amber-600 text-white font-bold border-[1px] hover:bg-amber-700 px-10 py-3  cursor-pointer'>
            {name}
        </button>
    </div>
  )
}

export default Button