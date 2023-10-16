import axios from "axios";
import { useEffect, useState } from "react";

const useAddNewUserDetails = (props) => {
  // console.log(props);
  const [data, setData] = useState({});
  useEffect(() => {
    postDetails(props);
  }, []);
  const baseURL = "http://localhost:3001/users";

  const postDetails = (props) => {
    axios
      .post(baseURL, props)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };
  return data;
};

export default useAddNewUserDetails;
