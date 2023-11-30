import axios from 'axios';

const url = "http://localhost:5000";


export const sendMessageViaAxios = async (productData) => {
    console.log("axios api reached..");
   return await axios.post(`${url}/`,productData);
}

export const getProduct = async () =>{
    console.log("get api reached ");
    return await axios.get(`${url}/`);
}

export const deleteProduct = async (productId) => {
    console.log("Api called to Delete Product with Product id => ", productId);
    return await axios.delete(`${url}/${productId}`);
  };

export const updateProduct = async () =>{
    console.log("put api at frontend");
    return await axios.put(`${url}/`);
}

export const addUser = async (formData) => {
    console.log("signup post api reached");
    return await axios.post(`${url}/signup`, formData);
}