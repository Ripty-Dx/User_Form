import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigation = useNavigate();
  const handleBackToHome = () => {
    window.location.href = "/dashboard";
  };
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    password: "",
  });
  const handleValues = (e) => {
    setLoginDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSuccess = () => {
    navigation("/success", {
      state: {
        message: "User Added successfully!",
        data: loginDetails,
      },
    });
  };

  // console.log(loginDetails);
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
          <form>
            {/* <!-- EMAIL --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="email" className="form-control shadow-sm" name="email" placeholder="Enter your email" required onChange={handleValues} />
            </div>
            {/* <!-- PASSWORD --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="password" className="form-control shadow-sm" name="password" placeholder="Enter your password" required onChange={handleValues} />
            </div>

            <button className="btn bg-blue btn-primary w-100 mb-3" onClick={handleSuccess}>
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
    </>
  );
};

export default Login;
