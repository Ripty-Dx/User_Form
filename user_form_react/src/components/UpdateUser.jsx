import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useSpecificUser from "../api/useSpecificUser";
import { useEffect } from "react";
import { useUpdate } from "../api/useUpdate";
const UpdateUser = () => {
  const navigation = useNavigate();
  const id = sessionStorage.getItem("update user id");
  const userData = useSpecificUser(id);
  const [updateUserRegistrationDetails, setUpdateUserRegistrationDetails] = useState({});
  const { mutateAsync } = useUpdate();
  const handleBackToHome = () => {
    window.location.href = "/dashboard";
  };
  useEffect(() => {
    setUpdateUserRegistrationDetails({
      name: userData?.name,
      email: userData?.email,
      mobile: userData?.mobile,
      address: userData?.address,
      gender: userData?.gender,
      hobbies: userData?.hobbies,
      preferences: userData?.preferences,
    });
  }, [userData]);
  const handleValues = (e) => {
    setUpdateUserRegistrationDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleHobby = (e) => {
    if (updateUserRegistrationDetails.hobbies.length) {
      if (updateUserRegistrationDetails.hobbies.includes(e.target.value)) {
        const filteredIndex = updateUserRegistrationDetails.hobbies.indexOf(e.target.value);
        updateUserRegistrationDetails.hobbies.splice(filteredIndex, 1);
      } else {
        updateUserRegistrationDetails.hobbies.push(e.target.value);
      }
    } else {
      updateUserRegistrationDetails.hobbies.unshift(e.target.value);
    }
    setUpdateUserRegistrationDetails((prev) => ({
      ...prev,
      [e.target.name]: updateUserRegistrationDetails.hobbies,
    }));
  };
  const handleOnSubmit = async(e) => {
    e.preventDefault();
    const status = await mutateAsync(userData.id, updateUserRegistrationDetails);
    console.log(status);
    navigation("/success", {
      state: {
        message: "User Details edited successfully!",
        status: status,
      },
    });
  };

  console.log(updateUserRegistrationDetails);
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
              <input type="text" className="form-control shadow-sm" name="name" placeholder="Enter your name" required onChange={handleValues} defaultValue={userData?.name} />
            </div>
            {/* <!-- EMAIL --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="email" className="form-control shadow-sm" name="email" placeholder="Enter your email" required onChange={handleValues} defaultValue={userData?.email} />
            </div>
            {/* <!-- MOBILE --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="number" className="form-control shadow-sm" name="mobile" placeholder="Enter your mobile" required onChange={handleValues} defaultValue={userData?.mobile} />
            </div>
            {/* <!-- ADDRESS --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="text" className="form-control shadow-sm" name="address" placeholder="Enter your address" onChange={handleValues} defaultValue={userData?.address} />
            </div>
            {/* <!-- GENDER --> */}
            <div className="mb-3 d-flex  flex-wrap justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5"> Gender </label>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="gender" required value="Male" id="Male" onChange={handleValues} checked={updateUserRegistrationDetails?.gender === "Male"} />
                <label className="form-check-label me-5" htmlFor="Male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  required
                  value="Female"
                  id="Female"
                  onChange={handleValues}
                  checked={updateUserRegistrationDetails?.gender === "Female"}
                />
                <label className="form-check-label me-5" htmlFor="Female">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  required
                  value="Others"
                  id="Others"
                  onChange={handleValues}
                  checked={updateUserRegistrationDetails?.gender === "Others"}
                />
                <label className="form-check-label me-5" htmlFor="Others">
                  Others
                </label>
              </div>
            </div>
            {/* <!-- HOBBIES --> */}
            <div className="mb-3 d-flex flex-wrap justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5"> Hobbies </label>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="hobbies"
                  value="Photography"
                  id="Photography"
                  onChange={handleHobby}
                  checked={updateUserRegistrationDetails?.hobbies?.includes("Photography")}
                />
                <label className="form-check-label me-4" htmlFor="Photography">
                  Photography
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="hobbies"
                  value="Blogging"
                  id="Blogging"
                  onChange={handleHobby}
                  checked={updateUserRegistrationDetails?.hobbies?.includes("Blogging")}
                />
                <label className="form-check-label me-4" htmlFor="Blogging">
                  Blogging
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Yoga" id="Yoga" onChange={handleHobby} checked={updateUserRegistrationDetails?.hobbies?.includes("Yoga")} />
                <label className="form-check-label me-4" htmlFor="Yoga">
                  Yoga
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Art" id="Art" onChange={handleHobby} checked={updateUserRegistrationDetails?.hobbies?.includes("Art")} />
                <label className="form-check-label me-4" htmlFor="Art">
                  Art
                </label>
              </div>
            </div>
            {/* <!-- PREFERENCES --> */}
            <div className="mb-3 d-flex justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5"> Preferences </label>
              <select className="form-select" name="preferences" onChange={handleValues} value={updateUserRegistrationDetails.preferences}>
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

export default UpdateUser;
