import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/locations'; // Replace with your API base URL

export const add_current_location = async ({ userid, location }) => {
    try { 
      const response = await axios.post(`${BASE_URL}/current`,{ userid, location });
      return response.data;
    } catch (error) {
      throw error.response.data; // Handle logout errors
    }
  };


export  const getNearestLocation = async ({lng, lat}) => {
 
    try {
      const response = await axios.get(`${BASE_URL}/nearest`, {
        params: {
          lng,
          lat
        }
      });
      return response.data
    } catch (error) {
      console.error('Error fetching nearest location:', error);
    }
  };
    