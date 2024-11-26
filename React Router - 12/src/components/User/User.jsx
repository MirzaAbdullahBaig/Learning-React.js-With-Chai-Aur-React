import React from 'react'
import { useParams } from 'react-router-dom'  

function User() {
  const {userid} = useParams()
  return (
    <div className='text-center text-6xl text-orange-700 m-4'>User: {userid}</div>
  )
}

export default User