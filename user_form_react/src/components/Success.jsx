import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import useAddNewUserDetails from "../api/useAddNewUserDetails";
import { useDelete } from "../api/useDelete";
import { useUpdate } from "../api/useUpdate";

const Success = () => {
  const handleBackToHome = () => {
    window.location.href = "/dashboard";
  };
  const location = useLocation();

  const status = useUpdate(location.state);
  // useAddNewUserDetails(location.state.data);
  // const status =  useDelete(location.state.data);
  return (
    <>
      <div className="bg-blue min-vh-100 min-vw-100 p-4 d-flex">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column mx-auto">
          <button className="btn btn-light back" onClick={handleBackToHome}>
            <AiFillHome style={{ color: "#4070f4" }} />
          </button>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="heading">{status === 200 ? location.state.message : "Something went wrong. Please try again...."}</h1>
            {/* <h1 className="heading"> location.state.message</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
