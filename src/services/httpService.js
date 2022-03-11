import axios from "axios";
import { toast } from "react-toastify";

const agroceryAxios = axios.create({
    baseURL: process.env.REACT_APP_AGROCERY_URL,
  });

axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        toast.error("An unexpected error occurred");
    }

    return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: agroceryAxios.get,
    post: agroceryAxios.post,
    put: agroceryAxios.put,
    delete: agroceryAxios.delete,
    patch: agroceryAxios.patch,
};
