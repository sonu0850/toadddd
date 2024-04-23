import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { tableData } from "../../Store/AuthSlice/authSlice";

// SignUp Using Formik for for form and Yup for Form Validation

const DetailForm = () => {
    const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth:"",
      gender:"",
     adhaarno:"",
      pan:"",
      date:"",
      image:"",

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
      dateOfBirth: Yup.string()
        .required(" Date Of Birth Required"),
      gender: Yup.string()
        .required("Gender is required"),
        adhaarno: Yup.string()
        .required("Adhaar Card No. is required"),
        pan: Yup.string()
        .required("Pan Card No. is required"),
        date: Yup.string()
        .required("Photo is required"),
        image: Yup.string()
        .required("Photo is required"),
        
    }),
    onSubmit: (values) => {
     console.log("valeeeeee", values);
     dispatch(tableData(values))
    },
  });

  return (
    <>
      <div className="signup  md:flex md:justify-center md:items-center bg-black w-[auto] h-auto text-white rounded-2xl ">


        <div className="form">
          <h2 className="text-5xl text-center font-semibold mt-4">
            Fill Your Details
          </h2>
          <form
            onSubmit={formik.handleSubmit}
            className=" max-w-xl md:w-[400px]  p-4 w-full"
          >
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
                className="p-2 border rounded text-black"
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
                className="p-2 border rounded text-black"
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
                className="p-2 border rounded text-black"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}

              <label htmlFor="dateOfBirth" className="block">
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateOfBirth}
                className="p-2 border rounded text-black"
              />
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                <div className="text-red-500">{formik.errors.dateOfBirth}</div>
              ) : null}

              <label htmlFor="gender" className="block">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gender}
                className="p-2 border rounded text-black"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="other">Other</option>
              </select>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="text-red-500">{formik.errors.gender}</div>
              ) : null}
              

              <label htmlFor="adhaarno" className="block">
                Adhaar Card Number
              </label>
              <input
                id="adhaarno"
                name="adhaarno"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.adhaarno}
                className="p-2 border rounded text-black"
              />
              {formik.touched.adhaarno && formik.errors.adhaarno ? (
                <div className="text-red-500">{formik.errors.adhaarno}</div>
              ) : null}
              <label htmlFor="pan" className="block">
                Pan Card Number
              </label>
              <input
                id="pan"
                name="pan"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pan}
                className="p-2 border rounded text-black"
              />
              {formik.touched.pan && formik.errors.pan ? (
                <div className="text-red-500">{formik.errors.pan}</div>
              ) : null}
              <label htmlFor="date" className="block">
                Date 
              </label>
              <input
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
                className="p-2 border rounded text-black"
              />
              {formik.touched.date && formik.errors.date ? (
                <div className="text-red-500">{formik.errors.date}</div>
              ) : null}


               <label htmlFor="image" className="block">
               Photo
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={formik.handleChange}
                className="p-2 border rounded text-black"
              />
              {formik.touched.image && formik.errors.image ? (
                <div className="text-red-500">{formik.errors.image}</div>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#EA4C89] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      
    </>
  );
};

export default DetailForm;
