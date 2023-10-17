import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Success = () => {
  const handleBackToHome = () => {
    window.location.href = "/dashboard";
  };
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <div className="bg-blue min-vh-100 min-vw-100 p-4 d-flex">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column mx-auto">
          <button className="btn btn-light back" onClick={handleBackToHome}>
            <AiFillHome style={{ color: "#4070f4" }} />
          </button>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="heading">{location.state.status === 200 || 201 ? location.state.message : "Something went wrong. Please try again...."}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
