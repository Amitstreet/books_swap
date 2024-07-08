// authApi.js
import axios from 'axios';

const BASE_URL = 'https://backend-1-dar6.onrender.com/api/auth'; // Replace with your API base URL

export const login = async ({email,password}) => {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle authentication errors
  }
};


export const signup = async ({username, email, password}) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, {
      username,
      email,
      password
    });
    console.log(response)
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle signup errors
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/signout`);
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle logout errors
  }
};




export const send_otp = async ({phoneNumber}) => {
  try {
    const response = await axios.post(`${BASE_URL}/send-otp`,{
      phoneNumber,
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle logout errors
  }
};

export const verify_otp = async ({phoneNumber,otp}) => {
  try {
    const response = await axios.post(`${BASE_URL}/verify-otp`,{
      phoneNumber,
      otp,
    });
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle logout errors
  }
};



// Other authentication API functions can be added here

