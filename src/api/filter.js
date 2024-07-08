import axios from 'axios';

const BASE_URL = 'https://backend-1-dar6.onrender.com/api/filter/search'; // Replace with your API base URL

export const serch = async ({key }) => {
    try { 
      const response = await axios.get(`${BASE_URL}/Keyword/${key}`);
      return response.data;
    } catch (error) {
      throw error.response.data; // Handle logout errors
    }
  };


export  const cat = async ({cate}) => {
 
    try {
      const response = await axios.get(`${BASE_URL}/category/${cate}`);
      return response.data
    } catch (error) {
      console.error('Error fetching nearest location:', error);
    }
  };
    