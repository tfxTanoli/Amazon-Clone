import axios from 'axios';

const url = "http://localhost:5000";


export const sendMessageViaAxios = async (productData) => {
    console.log("axios api reached..");
    // console.log(productData.productId);
   return await axios.post(`${url}/`,productData);
}