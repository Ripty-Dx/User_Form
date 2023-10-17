import axios from "axios";

const useLogin = (props) => {
  const baseURL = "http://localhost:3001/users";
  return {
    checkDetails: async (email, password) => {
      const response = await axios.get(`${baseURL}/?email=${email}&password=${password}`);
      console.log(response.data[0].name);
      return {
        authenticated:Boolean(response.data.length),
        name:response.data[0].name
      };
    },
  };
};

export default useLogin;
