"use client";
import axios from "axios";
import { Formik } from "formik";
import { useParams, useparams, useRouter } from "next/navigation";
import { Result } from "postcss";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = React.useState(null);
  const router = useRouter();

  const getUserData = async () => {
    const res = await axios.get("http://localhost:5000/user/getbyid/" + id);
    console.log(res.data);
    setUserData(res.data);
  };

    useEffect(() => {
    getUserData();
  }, []);

  const submitform = (values) => {
    console.log(values);
    axios.put("http://localhost:5000/user/update" +id,values)
    .then((result)=>{
        toast.success('User Update Successfully')
        router.push('/manageuser')
    }) .catch((err) => {
        toast.error('failed to update user')
    });
}
  return (
    <div>
      <div className="max-w-xl mx-auto p-5 border mt-5 shadow">
        <h1 className="text-2xl text-ceneter font-bold">Update User Detail</h1>
        {userData !== null ? (
          <Formik initialValues={userData} onsubmit={submitform}>
            {(updateForm) => {
              return (
                <form onsubmit={updateForm.handleSubmit}>
                  <input
                    className="w-full p-3 border rounded-lg mt-5 bg-gray-100"
                    placeholder="Enter your name"
                    onChange={updateForm.handleChange}
                    value={updateForm.values.name}
                    type="name"
                    id='name'
                  />
                  <input
                    className="w-full p-3 border rounded-lg mt-5 bg-gray-100"
                    placeholder="Enter your Email"
                    onChange={updateForm.handleChange}
                    value={updateForm.values.email}
                    type="email"
                    id='email'
                  />
                  <input
                    className="w-full p-3 border rounded-lg mt-5 bg-gray-100"
                    placeholder="Enter your Password"
                    onChange={updateForm.handleChange}
                    value={updateForm.values.password}
                    type="password"
                    id ="password"
                  />
                  <input
                    className="w-full p-3 border rounded-lg mt-5 bg-gray-100"
                    placeholder="Enter your City"
                    onChange={updateForm.handleChange}
                    value={updateForm.values.city}
                    type="city"
                    id='city'
                  />
                  <button className="block ml-auto p-3 bg-blue-500 text-white mt-6 rounded-lg"> Submit </button>
                </form>
              );
            }}
          </Formik>
        ) : (
          <p className="text-3xl text-gray-100 text-center font-bold mt-5">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
};


export default UpdateUser;