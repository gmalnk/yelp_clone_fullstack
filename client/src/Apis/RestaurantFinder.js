import axios from "axios";
baseURL =
  ENVERONMNET === "development"
    ? "http://localhost:3000/api/v1/restaurants"
    : "/api/v1/restaurants";
export default axios.create({
  baseURL,
});
