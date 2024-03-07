import axios from 'axios';
axios.defaults.headers.post['Content-Type']= 'application/json';
axios.defaults.headers.post['Accept']= 'application/json';

const API_URL = process.env.API_URL;

export const getAllTrips = async () => { 
    try{ 
        const response = await axios.get(API_URL);  
        return response.data

    }
    catch (error) {
      console.log('Error: ', error)
    }
}
export const getTripsByPage = async (CurrentPage) => { 
    try{ 
        const response = await axios.get(`http://127.0.0.1:8000/api/page?page=${CurrentPage}`);  
        return response.data

    }
    catch (error) {
      console.log('Error: ', error)
    }
}
