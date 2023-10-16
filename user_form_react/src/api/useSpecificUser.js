import axios from "axios";
import { useEffect, useState } from "react";

const useSpecificUser = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(props);
  }, []);
  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${id}`);
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return data;
};

export default useSpecificUser;
