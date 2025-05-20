import React from 'react'

const Button = ({name}) => {
  return (
    <div > 
        <button className='bg-amber-[10px]  text-amber-600 font-bold border-[1px] hover:bg-amber-100 px-10 py-3  cursor-pointer'>
            {name}
        </button>
    </div>
  )
}

export default Button