import axios from "axios";

const options = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    Accept: "application/json",
  },
};

export const $api = axios.create(options);
