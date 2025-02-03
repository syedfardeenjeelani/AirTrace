import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.aviationstack.com/v1",
  params: {
    access_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export default axiosInstance;

// axios // tanstack query 