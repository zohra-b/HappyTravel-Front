import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const API_URL = process.env.API_URL;

export const getAllTrips = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
export const getTripsByPage = async (currentPage) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/page?page=${currentPage}`
    );
    return response.data.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
