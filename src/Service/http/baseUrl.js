import axios from "axios";
  // Log the specific variable
// Create an Axios instance
const Api = axios.create({
  baseURL:`http://localhost:8080`,
  headers: {
    "Accept": "application/json",
    "Content-type": "application/json",
  },
});

 export default Api