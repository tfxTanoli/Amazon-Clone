import axios from 'axios';

const url = "http://localhost:5000";


export const sendMessageViaAxios = async (name,id) => {
    console.log("axios api reached..");
    console.log(name,id);
}