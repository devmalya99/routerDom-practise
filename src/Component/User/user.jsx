

import React from 'react'
import { useParams } from 'react-router-dom'

const user = () => {
  const {userId} =useParams()
    return (
    <div className='bg-gray-500 p-4 border-2 text-2xl font-bold grid place-items-center h-100vh'
    
    >user: {userId}</div>
  )
}

export default user