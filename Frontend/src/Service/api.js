import axios from 'axios';

const url = "http://localhost:5000";


export const sendMessageViaAxios = async (productData) => {
    console.log("axios api reached..");
   return await axios.post(`${url}/`,productData);
}

export const getProduct = async () =>{
    return await axios.get(`${url}/`);
}