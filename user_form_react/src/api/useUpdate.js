import axios from "axios";

export const useUpdate = (props) => {
  const baseURL = "http://localhost:3001/users";
  return {
    mutateAsync: async (id, data) => {
      try {
        if (!id || !data) {
          return "";
        }
        const response = await axios.put(`${baseURL}/${id}`, data);
        return response.status;
      } catch (error) {
        console.log(error);
      }
    },
  };
};
