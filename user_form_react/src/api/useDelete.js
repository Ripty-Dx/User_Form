import axios from "axios";

export const useDelete = () => {
  const baseURL = "http://localhost:3001/users";

  return {
    mutateAsyncDelete: async (id) => {
      try {
        if (!id) {
          return "";
        }
        // console.log(id);
        const response = await axios.delete(`${baseURL}/${id}`);
        return response.status;
      } catch (error) {
        console.log(error);
      }
    },
  };
};
