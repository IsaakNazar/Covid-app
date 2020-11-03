import axios from "axios";

export default axios.create({
  baseURL: "https://api.covid19api.com/",
  headers: {
    "Content-type": "application/json",
    "X-Auth-Token": '5cf9dfd5-3449-485e-b5ae-70a60e997864',
  }
})
