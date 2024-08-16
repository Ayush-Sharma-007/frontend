'use client'
import { IconCircleCheck, IconLoader, IconLoader3 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name : Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  password : Yup.string().required('Password is Required')
  .matches(/[a-z]/, 'Lowercase letter Required')
  .matches(/[A-Z]/, 'Uppercase letter Required')
  .matches(/[0-9]/, 'Number Required')
  .matches(/[\W]/, 'Special Character Required'),

  confirmPassword : Yup.string().required('Confirm Password is Required')
  .oneOf([Yup.ref('password'), null], 'Password must match')

});

const Signup = () => {

  const signupForm = useFormik({
    initialValues: {
      name : '',
      email : '',
      password : '',
      confirmPassword : ''
    },
    onSubmit: (values, {resetForm, setSubmitting}) => {

      // setTimeout(() => {
      //   console.log(values);   
      //   // resetForm(); 
      //   setSubmitting(false);  
      // }, 3000);

      // making a request
      axios.post("http://localhost:5000/user/add", values)
      .then((response) => {
        console.log(response.status);
        resetForm()
        toast.success('User registered successfully')
      }).catch((err) => {
        console.log(err);
        console.log(err.response?.data);
        setSubmitting(false)
        toast.error('Something went wrong')
      });

    },
    validationSchema: SignupSchema
  });

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-md mx-auto'>

        <div className='rounded-lg border-2 shadow p-8'>

            <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray-600'>Sign Form</h1>

          <form onSubmit={ signupForm.handleSubmit }>
            <label htmlFor="name">Full Name</label>
            <span className='text-sm ml-4 text-red-500'>{ signupForm.touched.name && signupForm.errors.name}</span>
            <input type="text" onChange={ signupForm.handleChange } value={ signupForm.values.name } id='name' 
            className={'border rounded w-full px-3 py-2 mb-4 '+ 
            ((signupForm.touched.name && signupForm.errors.name) ? 'border-red-500':'')}  />

            <label htmlFor="email">Email Address</label>
            <span className='text-sm ml-4 text-red-500'>{ signupForm.touched.email && signupForm.errors.email}</span>

            <input type="email" id='email' onChange={ signupForm.handleChange } value={ signupForm.values.email }
            className={'border rounded w-full px-4 py-2 mb-4 '+ 
            ((signupForm.touched.email && signupForm.errors.email) ? 'border-red-500':'')}/>

            <label htmlFor="password">Password</label>
            <span className='text-sm ml-4 text-red-500'>{ signupForm.touched.password && signupForm.errors.password}</span>

            <input type="password" id='password' onChange={ signupForm.handleChange } value={ signupForm.values.password }
            className={'border rounded w-full px-4 py-2 mb-4 '+ 
            ((signupForm.touched.password && signupForm.errors.password) ? 'border-red-500':'')}/>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <span className='text-sm ml-4 text-red-500'>{ signupForm.touched.confirmPassword && signupForm.errors.confirmPassword}</span>

            <input type="password" id='confirmPassword' onChange={ signupForm.handleChange } value={ signupForm.values.confirmPassword }
            className={'border rounded w-full px-4 py-2 mb-4 '+ 
            ((signupForm.touched.confirmPassword && signupForm.errors.confirmPassword) ? 'border-red-500':'')}/>

            <button type='submit' disabled={ signupForm.isSubmitting }
            className='bg-blue-500 flex justify-center items-center text-white px-3 py-2 rounded w-full mt-8 disabled:opacity-50'>
            { signupForm.isSubmitting?<IconLoader3 className='animate-spin' size={20}/>: <IconCircleCheck  size={20}/>}
            <span >{ signupForm.isSubmitting ? 'Please Wait' : 'Submit'}</span>
            </button>
          </form>

        </div>

      </div>
      
    </div>
  )
}

export default Signup
