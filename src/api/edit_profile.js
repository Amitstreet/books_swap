import axios from 'axios';

const BASE_URL = 'https://backend-1-dar6.onrender.com/api/edit/'; // Replace with your API base URL

export const edit_profile = async ({id,city,phoneNumber}) => {
    try {
      const response = await axios.post(`${BASE_URL}/${id}`,{
        city,
            phoneNumber
      });
      return response.data;
    } catch (error) {
      throw error.response.data; // Handle logout errors
    }
  };
  