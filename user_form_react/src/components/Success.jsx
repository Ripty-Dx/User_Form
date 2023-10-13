import React from "react";
import { AiFillHome } from "react-icons/ai";

const Success = () => {
  return (
    <>
      <div className="bg-blue min-vh-100 min-vw-100 p-4 d-flex">
        <div className="col-6 d-flex justify-content-center align-items-center flex-column mx-auto">
          <button className="btn btn-light back" onclick="window.location.href='/'">
            <AiFillHome style={{ color: "#4070f4" }} />
          </button>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="heading">hi</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
