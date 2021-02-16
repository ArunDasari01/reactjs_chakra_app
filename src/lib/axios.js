import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://mlamykbsoa.execute-api.ap-south-1.amazonaws.com/dev",
  headers: {
    ...(process.env.NODE_ENV === "development"
      ? { "x-client_name": "supermenu_dev" }
      : {}),
    "Content-Type": "application/json",
  },
});

export default axios;
