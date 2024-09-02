'use client'
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateUser = () => {

    const { id } = useParams();
    const [userData, setuserData] = useState(null) // null is used to make it easier to apply the condition
    const router = useRouter();         // to redirect the site after updation

    const getUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getbyid/' + id);
        console.log(res.data);
        setuserData(res.data);
    }

    useEffect(() => {
        getUserData();
    }, [])


    const submitForm = (values) => {
        console.log(values);

        axios.put('http://localhost:5000/user/update/'+id, values)
        .then((result) => {
            toast.success('User Updated Successfully')
            router.push('/manageuser')          // this line redirects the page to manageuser after successfull updation
        }).catch((err) => {
            console.log(err);
            toast.error('Failed to update User')           
        });
    }

    return (
        <div className='max-w-xl mx-auto p-5 border rounded-lg shadow'>
            <h1 className='text-2xl text-center font-bold'>Update User Details</h1>

            {
                userData !== null ? (

                    <Formik initialValues={userData} onSubmit={submitForm}>
                        {
                            (updateForm) => {
                                return (
                                    <form onSubmit={ updateForm.handleSubmit}>

                                        <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' 
                                        onChange={updateForm.handleChange} 
                                        value={updateForm.values.name} 
                                        id='name' type="text" placeholder='Enter Your Name' />

                                        <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' 
                                        onChange={updateForm.handleChange} 
                                        value={updateForm.values.email} 
                                        id='email' type="email" placeholder='Enter Your Email' />

                                        <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' 
                                        onChange={updateForm.handleChange} 
                                        value={updateForm.values.password} 
                                        id='password' type="password" placeholder='Enter Your Password' />

                                        <input className='w-full p-3 border rounded-lg mt-5 bg-gray-100' 
                                        onChange={updateForm.handleChange} 
                                        value={updateForm.values.city} 
                                        id='city' type="text" placeholder='Enter Your City' />

                                        <button className='block ml-auto p-3 bg-blue-500 text-white mt-6 rounded-lg'>Update User</button>
                                    </form>
                                )
                            }
                        }
                    </Formik>

                ) : <p className='text-3xl text-gray-300 text-center font-bold mt-5'>Loading...</p>
            }

        </div>
    )
}

export default UpdateUser