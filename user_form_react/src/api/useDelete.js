import axios from "axios";
import { useEffect, useState } from "react";

export const useDelete = (props) => {
  const [status, setStatus] = useState();
  const baseURL = "http://localhost:3001/users";
  useEffect(() => {
    deleteUser(props);
  }, []);
  const deleteUser = async (id) => {
    try {
      // console.log(id);
      const response = await axios.delete(`${baseURL}/${id}`);
      setStatus(response.status);
    } catch (error) {
      console.log(error);
    }
  };
  return status;
};
