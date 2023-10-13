import axios from "axios";
import React, { useEffect } from "react";

const useAddNewUserDetails = () => {
  useEffect(() => {
    postDetails();
  }, []);
  const name = { name: "Ripty Dx", email: "test@b2b.com", mobile: "211", address: "", gender: "Others" };
  const postDetails = () => {
    axios.post("http://localhost:3001/users", JSON.parse(name));
  };
};

export default useAddNewUserDetails;
