import React from "react";

const AllUsers = () => {
  return (
    <>
      <div className="bg-blue min-vh-100 min-vw-100 p-4 d-flex">
        <div className="w-100 shadow-sm bg-white border rounded-3 p-4">
          <div className="d-flex justify-content-between px-1 align-items-center mb-4">
            <h3>
              <span className="underline">All</span> Users
            </h3>
            <button className="btn btn-primary bg-blue">Add New User</button>
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
              <tr>
                <td>
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
