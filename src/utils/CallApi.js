import axios from "axios";
import { BASE_URL } from "./constants";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const callApi = async (ressource) => {
  const { data } = await axios.get(`${BASE_URL}/${ressource}`, config);
  return data;
};
