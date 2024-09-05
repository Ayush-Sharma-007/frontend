import React from 'react'
import toast from 'react-hot-toast';

const UploadingFile = () => {

   const handleUpload = (e) => {
     const file = e.target.files[0];

     const formData = new FormData();
     formData.append('file',file)
     formData.append('upload_preset','mypreset')
     formData.append('cloud_name','dmuyk3xar')

     axoios.post('https://api.cloudinary.com/v1_1/dmuyk3xar/image/upload',formData,{
      headers:{'content-type' : 'multipart/form-data'}
     })
      .then((result) => {
        console.log(result.data);
        toast.success('File Upploaded Successfully ')
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to Uploading File ')
        
      });
    }
    
    return (
      <div className='max-w-2xl mx-auto rounded-lg border-4 border-gray-300 flex justify-center p-8 mt-5'>
          <label htmlFor="uploadfile" className='text-5xl font-bold text-blue-500'> Upload Your File</label>
          <input type="file" id="uploadfile" className='hidden' />
      </div>
    )
  }
  
  export default UploadingFile
   
    

        