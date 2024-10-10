import React from 'react'
import { useLoaderData } from 'react-router-dom'  //use this for loader for fetch api

function Github() {
    const data = useLoaderData()  //this is a methord to access ths useloaderData

    return (

        <div className=' py-4 m-5 font-bold bg-gray-600 text-center text-white text-3xl'>Github Username : {data.name}
        
        <img src={data.avatar_url} alt="Gitpicture" width={300}/>
         </div>
        
    )
}

export default Github

export const GithubLoader = async() =>{
   const Responce = await fetch('https://api.github.com/users/alwaysagar')
   return Responce.json()
}

