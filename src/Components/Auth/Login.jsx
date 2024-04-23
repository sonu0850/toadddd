import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Login } from '../../Store/AuthSlice/authSlice';



const LogIn = () => {
  const navigate = useNavigate()
  const disptach = useDispatch()
 
  const formik = useFormik({
    initialValues: {
     
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      
        password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
     
    }),
    onSubmit: values => {
      console.log(values);
      console.log("value", values);
      disptach(Login(values)).unwrap().then((res)=>{
        console.log("Login unwrap res", res);
        if (res.success===true) {
          navigate('/Home')
          localStorage.setItem('token', res.token)
        } else {
          
        }
      })
      
    },
  });

  return (
    <>
    <div 
   
      className="signup md:flex md:justify-center md:items-center">
        <div className="leftimage">
          <img className=' w-[550px] h-[600px]' src="https://tailwindcomponents.com/svg/secure-login-animate.svg" alt=""   />
        </div>
        <div className="form">
          <h2 className='text-6xl'>Log In</h2>
        <form onSubmit={formik.handleSubmit} className="bred-200 max-w-xl md:w-[600px]  p-4 w-full">
      <div className="flex flex-col gap-4">
     

        

        <label htmlFor="email" className="block">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="p-2 border rounded"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password" className="block">
         Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="p-2 border rounded"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}
       
      </div>

      <NavLink to='/Forget' className='text-blue-500'> Forget Password</NavLink>
      <div className="btnatuh flex gap-4">
      <button type="submit" className="mt-4 bg-[#0ED3CF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-full">
        Submit
      </button>
    
      </div>
    </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
