import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useAddNewUserDetails from "../api/useAddNewUserDetails";
const NewUser = () => {
  const navigation = useNavigate();
  const { mutateAsyncAddNew } = useAddNewUserDetails();
  const handleBackToHome = () => {
    window.location.href = "/dashboard";
  };
  const [newUserRegistrationDetails, setNewUserRegistrationDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    hobbies: [],
    preferences: "",
  });
  const handleValues = (e) => {
    setNewUserRegistrationDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleHobby = (e) => {
    if (newUserRegistrationDetails.hobbies.length) {
      if (newUserRegistrationDetails.hobbies.includes(e.target.value)) {
        const filteredIndex = newUserRegistrationDetails.hobbies.indexOf(e.target.value);
        newUserRegistrationDetails.hobbies.splice(filteredIndex, 1);
      } else {
        newUserRegistrationDetails.hobbies.push(e.target.value);
      }
    } else {
      newUserRegistrationDetails.hobbies.unshift(e.target.value);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const status = await mutateAsyncAddNew(newUserRegistrationDetails);
    navigation("/success", {
      state: {
        message: "User Added successfully!",
        status: status,
      },
    });
  };

  // console.log(newUserRegistrationDetails);
  return (
    <>
      <div className="bg-blue min-vh-100 min-vw-100 p-4 d-flex">
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
        <div className="w-50 mx-auto my-auto shadow-sm bg-white border rounded-3 p-4">
          <h3 className="mb-4">
            <span className="underline">Re</span>gistration
          </h3>
          <form>
            {/* <!-- NAME --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="text" className="form-control shadow-sm" name="name" placeholder="Enter your name" required onChange={handleValues} />
            </div>
            {/* <!-- EMAIL --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="email" className="form-control shadow-sm" name="email" placeholder="Enter your email" required onChange={handleValues} />
            </div>
            {/* <!-- MOBILE --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="number" className="form-control shadow-sm" name="mobile" placeholder="Enter your mobile" required onChange={handleValues} />
            </div>
            {/* <!-- ADDRESS --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="text" className="form-control shadow-sm" name="address" placeholder="Enter your address" onChange={handleValues} />
            </div>
            {/* <!-- GENDER --> */}
            <div className="mb-3 d-flex  flex-wrap justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5"> Gender </label>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="gender" required value="Male" id="Male" onChange={handleValues} />
                <label className="form-check-label me-5" htmlFor="Male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="gender" required value="Female" id="Female" onChange={handleValues} />
                <label className="form-check-label me-5" htmlFor="Female">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="gender" required value="Others" id="Others" onChange={handleValues} />
                <label className="form-check-label me-5" htmlFor="Others">
                  Others
                </label>
              </div>
            </div>
            {/* <!-- HOBBIES --> */}
            <div className="mb-3 d-flex flex-wrap justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5"> Hobbies </label>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Photography" id="Photography" onChange={handleHobby} />
                <label className="form-check-label me-4" htmlFor="Photography">
                  Photography
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Blogging" id="Blogging" onChange={handleHobby} />
                <label className="form-check-label me-4" htmlFor="Blogging">
                  Blogging
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Yoga" id="Yoga" onChange={handleHobby} />
                <label className="form-check-label me-4" htmlFor="Yoga">
                  Yoga
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Art" id="Art" onChange={handleHobby} />
                <label className="form-check-label me-4" htmlFor="Art">
                  Art
                </label>
              </div>
            </div>
            {/* <!-- PREFERENCES --> */}
            <div className="mb-3 d-flex justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5"> Preferences </label>
              <select className="form-select" name="preferences" onChange={handleValues}>
                <option selected disabled value="">
                  Select Top Soft Skills
                </option>
                <option value="Problem Solving">Problem Solving</option>
                <option value="Critical Thinking">Critical Thinking</option>
                <option value="Creativity">Creativity</option>
              </select>
            </div>
            <button className="btn bg-blue btn-primary w-100" onClick={handleOnSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewUser;
