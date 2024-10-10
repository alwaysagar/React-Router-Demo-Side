import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { userid } = useParams()

    return (
        <div className=' py-4 bg-gray-600 text-center text-white text-3xl'> User: {userid}</div>
    )
}
// you can  use this in search section :- localhost:5173/user/ ......Anything(userid)
export default User
