import axios from "axios";
import { useEffect, useState } from "react";

const useAddNewUserDetails = (props) => {
  // console.log(props);
  const [data, setData] = useState({});

  const baseURL = "http://localhost:3001/users";
  return {
    mutateAsyncAddNew: async (data) => {
      try {
        if (!data) {
          return "";
        }
        const response = await axios.post(`${baseURL}`, data);
        setData(response.data);
        return response.status;
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export default useAddNewUserDetails;
