'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const UpdateUser = () => {

    const { id } = useParams();
    const [userData, setuserData] = useState(null) // null is used to make it easier to apply the condition

    const getUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getbyid/'+id);
        console.log(res.data);
        setuserData(res.data);
    }

    useEffect(() =>{
        getUserData();
    },[])

  return (
    <div className='max-w-xl mx-auto p-5 border rounded-lg shadow'>
        <h1 className='text-2xl text-center font-bold'>Update User Details</h1>

        {
            userData !== null ? (
        <form>
            <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' id='name' type="text" placeholder='Enter Your Name' />
            <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' id='email' type="email" placeholder='Enter Your Email' />
            <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' id='password' type="password" placeholder='Enter Your Password' />
            <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' id='city' type="text" placeholder='Enter Your City' />

            <button className='block ml-auto p-3 bg-blue-500 text-white mt-6 rounded-lg'>Update User</button>
        </form>
            ) : <p className='text-3xl text-gray-300 text-center font-bold mt-5'>Loading...</p>
        }

    </div>
  )
}

export default UpdateUser