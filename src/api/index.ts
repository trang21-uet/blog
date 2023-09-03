import { API_URL } from "@/constant";
import axios from "axios";
import Endpoint from "./endpoint";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

const apiClient = {
  get: async (endpoint: string, params = {}) => {
    try {
      const response = await axios.get(endpoint, {
        params,
      });

      return response;
    } catch (error) {
      throw error;
    }
  },

  post: async (endpoint: string, body: {}) => {
    try {
      const response = await axios.post(endpoint, body);

      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default apiClient;

export { Endpoint };
