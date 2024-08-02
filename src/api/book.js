import axios from 'axios';

// const BASE_URL = 'https://backend-1-dar6.onrender.com/api/books'; // Replace with your API base URL
const BASE_URL = 'https://backend-cb6b.onrender.com/api/books'; // Replace with your API base URL

export const add_book = async ({id,bookname,writer,url,catogery,description}) => {
  try {
    const response = await axios.post(`${BASE_URL}/addbook`, {
       id, bookname,writer,url,catogery,description
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle authentication errors
  }
};



export const getbook = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getall`);
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle logout errors
  }
};



export const getbook_user = async ({id}) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter_book/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle logout errors
  }
};


export const edit_book = async ({_id,id,bookname,writer,url,catogery,description}) => {
  try { 
    const response = await axios.put(`${BASE_URL}/edit_book/${_id}`,{
      id, bookname,writer,url,catogery,description
   });
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle logout errors
  }
};
 

export const delate_book = async ({id}) => {
  try { 
    const response = await axios.delete(`${BASE_URL}/delate_book/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle logout errors
  }
};