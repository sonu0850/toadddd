import React from 'react';
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux'
import * as Yup from 'yup';
import { signUp } from '../../Store/AuthSlice/authSlice';
import { useNavigate } from 'react-router-dom';


// SignUp Using Formik for for form and Yup for Form Validation

const SignupForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
 

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
     
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required(" Email Required"),
        password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirm_password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .min(2, "Must be 2 characters or less")
        .required("Password Required")
        .oneOf([Yup.ref("password"), null], "password not match"),
    }),
    onSubmit: values  => {
      console.log("values", values);
      dispatch(signUp(values)).unwrap().then((res)=>{
        console.log("unwrap sign up ", res);
        if (res.success === true) {
navigate('/Login')
          
        } else {
          
        }
      })

    },
  });

  return (
    <>
    <div   className="signup md:flex md:justify-center md:items-center">
        <div className="leftimage">
          <img className=' w-[600px] h-[600px]' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt=""   />
        </div>
        <div className="form">
          <h2 className='text-5xl text-center font-semibold'>Sign Up</h2>
        <form onSubmit={formik.handleSubmit} className="bred-200 max-w-xl md:w-[600px]  p-4 w-full">
      <div className="flex flex-col gap-4">
        <label htmlFor="firstName" className="block">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className="p-2 border rounded"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500">{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName" className="block">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className="p-2 border rounded"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500">{formik.errors.lastName}</div>
        ) : null}

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
        <label htmlFor="confirm_password" className="block">
         Confirm Password
        </label>
        <input
          id="confirm_password"
          name="confirm_password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirm_password}
          className="p-2 border rounded"
        />
        {formik.touched.confirm_password && formik.errors.confirm_password ? (
          <div className="text-red-500">{formik.errors.confirm_password}</div>
        ) : null}
      </div>

      <button type="submit" className="mt-4 bg-[#EA4C89] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
