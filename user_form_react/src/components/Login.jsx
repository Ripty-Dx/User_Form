import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useLogin from "../api/useLogin";
import { useFormik } from "formik";
import { signInSchema } from "../schema";
const Login = () => {
  // const [loginDetails, setLoginDetails] = useState({
  //   email: "",
  //   password: "",
  // });
  const initialLoginValues = {
    email: "",
    password: "",
  };
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialLoginValues,
    validationSchema: signInSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  // console.log(errors);
  const { checkDetails } = useLogin();
  const navigation = useNavigate();
  const handleBackToHome = () => {
    window.location.href = "/dashboard";
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const status = await checkDetails(initialLoginValues.email, initialLoginValues.password);
    // console.log(status);
    if (status.authenticated) {
      navigation("/dashboard");
      sessionStorage.setItem("user name", status.name);
    } else {
      navigation("/");
    }
  };
  // console.log(loginDetails);
  return (
    <>
      {!sessionStorage.getItem("user name") ? (
        <div className="bg-blue min-vh-100 min-vw-100 p-4 d-flex">
          {/* <!-- Left part --> */}
          <div className="col-6 d-flex flex-wrap justify-content-center align-items-center flex-column">
            <button className="btn btn-light back" onClick={handleBackToHome}>
              <AiFillHome style={{ color: "#4070f4" }} />
            </button>
            <div className="d-flex flex-wrap justify-content-center align-items-center flex-column">
              <div>
                <h1 className="heading">User Details</h1>
                <h1 className="heading">Portal</h1>
              </div>
            </div>
          </div>
          {/* <!-- right part --> */}
          <div className="col-4 mx-auto my-auto shadow-sm bg-white border rounded-3 p-4 py-5">
            <h3 className="mb-4">
              <span className="underline">Si</span>gn in
            </h3>
            <form onSubmit={handleSubmit}>
              {/* <!-- EMAIL --> */}
              <div className="mb-3 d-flex justify-content-center flex-column align-items-center w-100">
                <input type="email" className="form-control shadow-sm" name="email" placeholder="Enter your email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                {errors.email && touched.email ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.email}</p> : null}
              </div>
              {/* <!-- PASSWORD --> */}
              <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
                <input type="password" className="form-control shadow-sm" name="password" placeholder="Enter your password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                {errors.password && touched.password ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.password}</p> : null}
              </div>

              {/* <button className="btn bg-blue btn-primary w-100 mb-3" onClick={handleOnSubmit}>    */}
              <button className="btn bg-blue btn-primary w-100 mb-3" type="submit" onClick={handleOnSubmit}>
                Submit
              </button>
              <div className="mb-3 d-flex justify-content-center align-items-center w-100">
                <a href="/newUser" className="text-center">
                  New User? Sign up here!
                </a>
              </div>
            </form>
          </div>
        </div>
      ) : (
        (window.location.href = "/dashboard")
      )}
    </>
  );
};

export default Login;
