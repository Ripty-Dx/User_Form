import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useAddNewUserDetails from "../api/useAddNewUserDetails";
import { useFormik } from "formik";
import * as Yup from "yup";
import { newUserSchema } from "../schema/NewUser";
const NewUser = () => {
  const navigation = useNavigate();
  const { mutateAsyncAddNew } = useAddNewUserDetails();
  const handleBackToHome = () => {
    window.location.href = "/dashboard";
  };

  const { values, handleChange, errors, handleSubmit, handleBlur, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      address: "",
      gender: "",
      password: "",
      confirm_password: "",
      hobbies: [],
      preferences: "",
    },
    onSubmit: async (values) => {
      const status = await mutateAsyncAddNew(values);
      navigation("/success", {
        state: {
          message: "User Added successfully!",
          status: status,
        },
      });
    },
    validationSchema: newUserSchema,
  });
  console.log(errors);

  // const [newUserRegistrationDetails, setNewUserRegistrationDetails] = useState({
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   address: "",
  //   gender: "",
  //   password: "",
  //   confirm_password: "",
  //   hobbies: [],
  //   preferences: "",
  // });
  // const handleValues = (e) => {
  //   setNewUserRegistrationDetails((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  // const handleHobby = (e) => {
  //   if (newUserRegistrationDetails?.hobbies?.length) {
  //     if (newUserRegistrationDetails?.hobbies?.includes(e.target.value)) {
  //       const filteredIndex = newUserRegistrationDetails?.hobbies?.indexOf(e.target.value);
  //       newUserRegistrationDetails?.hobbies?.splice(filteredIndex, 1);
  //     } else {
  //       newUserRegistrationDetails?.hobbies?.push(e.target.value);
  //     }
  //   } else {
  //     newUserRegistrationDetails?.hobbies?.unshift(e.target.value);
  //   }
  // };

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   // if (!newUserRegistrationDetails?.password?.localeCompare(newUserRegistrationDetails?.confirm_password)) {
  //   const status = await mutateAsyncAddNew(values);
  //   navigation("/success", {
  //     state: {
  //       message: "User Added successfully!",
  //       status: status,
  //     },
  //   });
  //   // } else {
  //   //   console.log("password is not matching");
  //   // }
  // };

  // console.log(newUserRegistrationDetails);
  return (
    <>
      <div className="bg-blue min-vh-100 vw-100 p-4 d-flex" style={{maxWidth:window.outerWidth}}>
        {/* <!-- Left part --> */}
        <div className="col-6 d-flex flex-wrap justify-content-center align-items-center flex-column">
          <button className="btn btn-light back" onClick={handleBackToHome}>
            <AiFillHome style={{ color: "#4070f4" }} />
          </button>
          <div className="d-flex flex-wrap justify-content-center align-items-center flex-column">
            <div>
              <h1 className="heading">Registration</h1>
              <h1 className="heading">Form</h1>
            </div>
          </div>
        </div>
        {/* <!-- right part --> */}
        <div className="w-50 mx-auto my-auto shadow-sm bg-white border rounded-3 px-4 py-3">
          <h3 className="mb-2">
            <span className="underline">Re</span>gistration
          </h3>
          <form onSubmit={handleSubmit}>
            {/* <!-- NAME --> */}
            <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
              <input type="text" className="form-control shadow-sm" name="name" placeholder="Enter your name" onBlur={handleBlur} onChange={handleChange} value={values.name} />
              {errors.name && touched.name ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.name}</p> : null}
            </div>
            {/* <!-- EMAIL --> */}
            <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
              <input type="email" className="form-control shadow-sm" name="email" placeholder="Enter your email" onBlur={handleBlur} onChange={handleChange} value={values.email} />
              {errors.email && touched.email ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.email}</p> : null}
            </div>
            {/* <!-- PASSWORD --> */}
            <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
              <input type="password" className="form-control shadow-sm" name="password" placeholder="Enter your password" onBlur={handleBlur} onChange={handleChange} value={values.password} />
              {errors.password && touched.password ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.password}</p> : null}
            </div>
            {/* <!-- CONFIRM PASSWORD --> */}
            <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
              <input
                type="password"
                className="form-control shadow-sm"
                name="confirm_password"
                placeholder="Confirm password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirm_password}
              />
              {errors.confirm_password && touched.confirm_password ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.confirm_password}</p> : null}
            </div>
            {/* <!-- MOBILE --> */}
            <div className="mb-3 d-flex flex-column justify-content-center align-items-center w-100">
              <input type="number" className="form-control shadow-sm" name="mobile" placeholder="Enter your mobile" onBlur={handleBlur} onChange={handleChange} value={values.mobile} />
              {errors.mobile && touched.mobile ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.mobile}</p> : null}
            </div>
            {/* <!-- ADDRESS --> */}
            <div className="mb-2 d-flex flex-column justify-content-center align-items-center w-100">
              <input type="text" className="form-control shadow-sm" name="address" placeholder="Enter your address" onBlur={handleBlur} onChange={handleChange} value={values.address} />
              {errors.address && touched.address ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.address}</p> : null}
            </div>
            {/* <!-- GENDER --> */}
            <div className="mb-2 d-flex flex-column flex-wrap justify-content-start align-items-center w-100">
              <div className="d-flex justify-content-start flex-wrap ps-1 align-items-center w-100">
                <label className="form-label me-5" style={{ width: "80px" }}>
                  Gender{" "}
                </label>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="gender" value="Male" id="Male" onBlur={handleBlur} onChange={handleChange} />
                  <label className="form-check-label me-5" htmlFor="Male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="gender" value="Female" id="Female" onBlur={handleBlur} onChange={handleChange} />
                  <label className="form-check-label me-5" htmlFor="Female">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="gender" value="Others" id="Others" onBlur={handleBlur} onChange={handleChange} />
                  <label className="form-check-label me-5" htmlFor="Others">
                    Others
                  </label>
                </div>
              </div>
              {errors.gender && touched.gender ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.gender}</p> : null}
            </div>
            {/* <!-- HOBBIES --> */}
            <div className="mb-2 d-flex flex-wrap justify-content-start align-items-center w-100">
            <div className="d-flex justify-content-start flex-wrap ps-1 align-items-center w-100">
              <label className="form-label me-5" style={{ width: "80px" }}>
                {" "}
                Hobbies{" "}
              </label>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Photography" id="Photography" onBlur={handleBlur} onChange={handleChange} />
                <label className="form-check-label me-4" htmlFor="Photography">
                  Photography
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Blogging" id="Blogging" onBlur={handleBlur} onChange={handleChange} />
                <label className="form-check-label me-4" htmlFor="Blogging">
                  Blogging
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Yoga" id="Yoga" onBlur={handleBlur} onChange={handleChange} />
                <label className="form-check-label me-4" htmlFor="Yoga">
                  Yoga
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Art" id="Art" onBlur={handleBlur} onChange={handleChange} />
                <label className="form-check-label me-4" htmlFor="Art">
                  Art
                </label>
              </div>
              </div>
              {errors.hobbies && touched.hobbies ? <p className="form-error text-danger ps-1 m-0 fs-6 w-100">{errors.hobbies}</p> : null}
            </div>
            {/* <!-- PREFERENCES --> */}
            <div className="mb-3 d-flex justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5" style={{ width: "100px" }}>
                {" "}
                Preferences{" "}
              </label>
              <select className="form-select" name="preferences" onBlur={handleBlur} onChange={handleChange} value={values.preferences}>
                <option selected disabled value="">
                  Select Top Soft Skills
                </option>
                <option value="Problem Solving">Problem Solving</option>
                <option value="Critical Thinking">Critical Thinking</option>
                <option value="Creativity">Creativity</option>
              </select>
            </div>
            <button className="btn bg-blue btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewUser;
