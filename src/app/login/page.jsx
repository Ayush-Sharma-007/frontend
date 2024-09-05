import React from 'react';
import classes from './login.module.css';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useFormik } from 'formik';

const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <div>
      <h1 className='text-center text-2xl font-bold'>Login Page</h1>
      <button className='btn'>Login button</button>
      <button className={classes.myBtn}>Module CSS</button>

      <form onSubmit={loginForm.handleSubmit}>

        <input id={'email'} onChange={loginForm.handleChange}
          value={loginForm.values.email} type={'email'} />

        <input id={'password'} onChange={loginForm.handleChange}
          value={loginForm.values.email} type={'password'} />

        <button type='submit'>Submit</button>
      
      </form>

      <Button>Login</Button>

    </div>
  )
}

export default Login;