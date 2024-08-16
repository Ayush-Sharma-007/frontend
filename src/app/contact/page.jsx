import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

      <div className='w-full max-w-md mx-auto'>

        <div className='rounded-lg shadow border-2 p-8 bg-gradient-to-b from-gray-100 to-gray-600'>

          <h1 className='uppercase font-bold my-6 text-center text-3xl text-gray-600'>Contact form</h1>

          <form className=''>
            <label htmlFor="name">Name</label>
            <input type="text" className='px-3 py-1/2 outline-none border-b rounded mb-4 w-full'/> 
            <label htmlFor="email">Email</label>
            <input type="email" className='px-3 py-1/2 outline-none border-b rounded mb-4 w-full'/> 
            <label htmlFor="phone-no">Phone No.</label>
            <input type="tel" name="" id=""  className='px-3 py-1/2 outline-none border-b rounded mb-4 w-full'/>    
            <label htmlFor="message">Type your message here:</label>
            <textarea name="" id="" className='px-3 py-1/2 outline-none border-b rounded mb-4 w-full'></textarea>  

            <button type="submit" className='border bg-blue-600 text-white w-full rounded py-1'>Submit</button>
            </form>

        </div>

      </div>

      
    </div>
  )
}

export default Contact
