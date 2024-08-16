'use client'
import React from 'react';
import classes from './login.module.css';
import Input from '@/components/input';
import Button from '@/components/Button';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const loginSchema = Yup.object().shape({
  email : Yup.string()
    .email("Invalid Email")
    .required("Required"),

})

const Login = () => {

  const loginForm = useFormik({
      initialValues: {
        email : '',
        password : '',
      },

      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema : loginSchema
  });

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-md mx-auto'>
        <div className='rounded-lg border-2 shadow p-8'>
          <h1 className='uppercase font-bold text-center my-6 text-gray-600 text-3xl'>Login</h1>

          <form onSubmit={ loginForm.handleSubmit }>

            <label htmlFor="email">Email Address</label>
            <span className='text-sm ml-4 '>{ loginForm.touched.email && loginForm.errors.email}</span>

            <input id="email" type="email" onChange={ loginForm.handleChange } value={ loginForm.values.email } className='w-full border px-2 py-2 rounded mb-4' />

            <label htmlFor="password">Password</label>
            <span className='text-sm ml-4 '>{ loginForm.touched.password && loginForm.errors.password}</span>
            <input id="password" type="password" onChange={ loginForm.handleChange } value={ loginForm.values.password } className='w-full border px-2 py-2 rounded mb-4' />

            <input type="checkbox"/>
            <span className='ml-1'>Remember me</span>

            <button className='w-full border bg-blue-500 px-3 py-2 rounded-md text-white mt-4 '>Login</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
