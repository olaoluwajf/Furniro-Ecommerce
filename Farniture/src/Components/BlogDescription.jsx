import React from 'react'
import { FiUser, FiCalendar,FiTag } from 'react-icons/fi'

const BlogDescription = () => {
  return (
    <div className='flex flex-row gap-5 items-center justify-center text-gray-500 text-sm m-4'>
        <FiUser/>
        <span className='text-sm text-gray-500'> Admin</span>
        <FiCalendar />
        <span className='text-sm text-grey-500'>14th October 2025 G.C</span>
        <FiTag/>
        <span className='text-small text-grey-500'> Wood</span>

    </div>
  )
}

export default BlogDescription