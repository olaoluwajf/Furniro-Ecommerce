import React from 'react'

const Featur = ({p,span, icon}) => {
  return (
    <div className='flex justify-center p-3'>
        <div className='text-5xl p-2'>
            {icon}
        </div>
        <div className=' justify-center'>
            <span className='font-bold'>{span}</span>
            <p className='text-stone-500'>{p}</p>
        </div>
    </div>
  )
}

export default Featur