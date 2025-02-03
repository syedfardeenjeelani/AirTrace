import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://api.aviationstack.com/v1/flights?access_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
