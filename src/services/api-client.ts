import axios from "axios";
import dotenv from "dotenv";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY, //
  },
});

