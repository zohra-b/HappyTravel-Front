import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const API_URL = process.env.API_URL;
export const getAllTrips = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getTripsByPage = async (currentPage) => {
  const response = await axios.get(`${API_URL}/page?page=${currentPage}`);
  return response.data.data;
};

export const getSearchTrips = async (searchText) => {
  const response = await axios.get(`${API_URL}/search/?search=${searchText}`);
  return response.data;
};

export const registerUser = async (formData) => {
  
  try {
   await axios.post(`${API_URL}/register`, formData);
    
  } catch (error) {
    console.log("Error registering user: ", error);
    throw error; 
  }
};
