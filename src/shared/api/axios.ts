import type { CreateAxiosDefaults } from "axios";
import axios from "axios";

const options: CreateAxiosDefaults = {
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  headers: {
    Accept: "application/json",
  },
};

export const $api = axios.create(options);
