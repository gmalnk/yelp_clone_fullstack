import axios from "axios";
const baseURL =
  process.env.ENVERONMNET === "development"
    ? "http://localhost:3000/api/v2/restaurants"
    : "http://localhost:3000/api/v2/restaurants";
export default axios.create({
  baseURL,
});
