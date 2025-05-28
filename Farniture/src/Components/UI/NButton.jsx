import React from 'react'

const NButton = ({name}) => {
  return (
    <div>
        <button className='bg-amber-100 p-4 rounded-md m-1'>
            {name}
        </button>
    </div>
  )
}

export default NButton