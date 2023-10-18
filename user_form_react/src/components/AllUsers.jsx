import React from "react";
import useAllUserList from "../api/useAllUserList";
import { useNavigate } from "react-router-dom";
import { useDelete } from "../api/useDelete";

const AllUsers = () => {
  const userData = useAllUserList();
  const navigate = useNavigate();
  const { mutateAsyncDelete } = useDelete();
  const handleAddNew = () => {
    navigate("/newUser");
  };

  const onDelete = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const status = await mutateAsyncDelete(id);
    console.log(status);
    navigate("/success", {
      state: {
        message: "User Deleted successfully!",
        status: status,
      },
    });
  };
  const onUpdate = (id) => {
    navigate("/updateUser");
    sessionStorage.setItem("update user id", id);
  };
  return (
    <>
      {sessionStorage.getItem("user name") ? (
        <div className="bg-blue min-vh-100 min-vw-100 p-4 d-flex">
          <div className="w-100 shadow-sm bg-white border rounded-3 p-4 min-vh-50">
            <div className="d-flex gap-3 justify-content-center px-1 align-items-center mb-1">
              <p className="align-middle m-0 fs-3">Welcome </p>
              <h3 className="align-middle m-0 text-danger text-capitalize">{sessionStorage.getItem("user name")}</h3>
            </div>
            <div className="d-flex justify-content-between px-1 align-items-center mb-4">
              <h3>
                <span className="underline">All</span> Users
              </h3>
              <button className="btn btn-primary bg-blue" onClick={handleAddNew}>
                Add New User
              </button>
            </div>
            {userData?.length ? (
              <>
                <div className="table-responsive">
                  <table className="table table-striped border">
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
                        return (
                          <tr key={index}>
                            <td>{ele?.id}</td>
                            <td>{ele?.name}</td>
                            <td>{ele?.email}</td>
                            <td>{ele?.mobile}</td>
                            <td>{ele?.address?.length > 0 ? ele.address : "..."}</td>
                            <td>{ele?.gender}</td>
                            <td>
                              {ele?.hobbies?.length > 0
                                ? ele?.hobbies.map((hobby) => (
                                    <>
                                      {hobby}
                                      <br></br>
                                    </>
                                  ))
                                : "..."}
                            </td>
                            <td>{ele?.preferences?.length > 0 ? ele.preferences : "..."}</td>
                            <td>
                              <button className="btn btn-success me-2" onClick={() => onUpdate(ele?.id)}>
                                Edit
                              </button>
                              <button className="btn btn-danger" onClick={(e) => onDelete(e, ele?.id)}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <>
                <div className="d-flex justify-content-center align-items-center min-vw-50 h-50">
                  <p className=""> No data found</p>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
};

export default AllUsers;
