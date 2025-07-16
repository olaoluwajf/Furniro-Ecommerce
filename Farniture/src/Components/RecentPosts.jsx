import React from 'react'

const RecentPosts = (props) => {
  return (
    <div className='m-4 mb-6 flex flex-col gap-5'>
        <h1 className='font-bold text-2xl m-3'>
            Recent Photos</h1>
        <div className='flex flex-row items-center text-left'>
            <img src={props.image} alt="" />
            <div className='flex flex-col  items-center '>
                <h2 className='font-semibold w-40 m-2 mb-1'> {props.description}</h2>
                <span className='text-sm w-30 flex'>{props.dayInfo}</span>
            </div>
        </div>
    </div>
  )
}

export default RecentPosts