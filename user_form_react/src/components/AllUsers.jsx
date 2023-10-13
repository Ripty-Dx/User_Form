import React from "react";
import useAllUserList from "../api/useAllUserList";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const userData = useAllUserList();
  console.log(userData);
  const navigate = useNavigate();
  const handleAddNew = () => {
    navigate("/newUser");
  };

  return (
    <>
      <div className="bg-blue min-vh-100 min-vw-100 p-4 d-flex">
        <div className="w-100 shadow-sm bg-white border rounded-3 p-4">
          <div className="d-flex justify-content-between px-1 align-items-center mb-4">
            <h3>
              <span className="underline">All</span> Users
            </h3>
            <button className="btn btn-primary bg-blue" onClick={handleAddNew}>
              Add New User
            </button>
          </div>
          <table className="table table-responsive table-striped border">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Preferences</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((ele, index) => {
                // console.log(Array.isArray(ele?.hobbies));
                // console.log(ele);
                // console.log(ele?.hobbies?.length? ele?.hobbies?.map((item) => item) : "");
                return (
                  <tr key={index}>
                    <td>{ele?.id}</td>
                    <td>{ele?.name}</td>
                    <td>{ele?.email}</td>
                    <td>{ele?.mobile}</td>
                    <td>{ele?.address.length > 0 ? ele.address : "..."}</td>
                    <td>{ele?.gender}</td>
                    <td>{ele?.hobbies ? (ele?.hobbies.length > 0 ? ele?.hobbies : "no Length") : "..."}</td>
                    <td>{ele?.preferences ?? "..."}</td>
                    <td>
                      <button className="btn btn-success me-2">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
