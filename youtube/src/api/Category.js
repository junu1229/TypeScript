import axios from "axios";

// http://localhost:8081/api/
const instance = axios.create({
    baseURL: "http://localhost:8081/api/",
});

// async ~ await + axios
export const getCategories = async () => {
    return await instance.get("category");
};

export const selectCategories = async () => {
  return await instance.get("category/1");
};

export const selectUser = async () => {
  return await instance.get("user");
};

