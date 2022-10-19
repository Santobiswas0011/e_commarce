import axios from 'axios';

const URL = "http://localhost:8002";

export const addRegisterData = async (formData) => {
   try {
      return await axios.post(`${URL}/register`, formData);
   } catch (error) {
      return error.response;
   }
};

export const loginData = async (logData) => {
   try {
      return await axios.post(`${URL}/login`, logData);
   } catch (error) {
      return error.response;
   }
};
export const googleLogin = async (data) => {
   try {
      return await axios.post(`${URL}/gLogin/${data}`,);
   } catch (error) {
      return error.response;
   }
};
