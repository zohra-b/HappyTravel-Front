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


export const loginUser = async (loginInput) => {
  try {
    const response = await axios.post(`${API_URL}/login/`, loginInput);
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error; // Propaga el error para que el componente pueda manejarlo si es necesario
  }
};
