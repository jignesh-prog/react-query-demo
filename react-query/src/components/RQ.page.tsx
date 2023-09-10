import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

type superhero = {  
    name:string,
    data:string,
    id:number
    email:string,
    city:string,
 
}

const fetchUser = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

export function RQPage () {
   const {isLoading,data,error} = useQuery('users',fetchUser)

   if (isLoading) {
    return <h2>Loading...</h2>
   }

   if (error instanceof Error) {
    return <h2>{error.message}</h2>
   }

  return (
   <>
     <h2>User Detail</h2>
     {data?.data.map((user:superhero) => {
        return <div key={user.id}>{user.name}</div>
     })}
     </>
  )
}

export default RQPage
