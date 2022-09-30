import axios from "axios";

export const http = axios.create({
  baseURL: "https://reqres.in/api",
});

export const google = axios.create({
  baseURL: "https://newsapi.org/v2/everything?q=",
});
