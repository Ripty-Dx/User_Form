import axios from "axios";
import { useEffect, useState } from "react";

const useAllUserList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/users");
    console.log(response.data);
    setData(response.data);
  };
  return data;
};

export default useAllUserList;
