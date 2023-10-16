import axios from "axios";
import { useEffect, useState } from "react";

export const useUpdate = (props) => {
  const [status, setStatus] = useState();
  const baseURL = "http://localhost:3001/users";
  useEffect(() => {
    fetchData(props.id, props.data);
  }, [props.id, props.data]);
  const fetchData = async (id, data) => {
    try {
      const response = await axios.put(`${baseURL}/${id}`, data);
      setStatus(response.status);
    } catch (error) {
      console.log(error);
    }
  };
  return status;
};
