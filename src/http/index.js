import axios from "axios";

const $host = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:8080/api" : "/api"
})


export {
  $host
}