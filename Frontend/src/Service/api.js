import axios from 'axios';

const url = "http://localhost:5000";


export const sendMessageViaAxios = async (productName) => {
    console.log("axios api reached..");
    console.log(productName);
   await axios.post(`${url}/`,productName);
}