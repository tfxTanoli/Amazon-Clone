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

  export const updateProduct = async (productId, updatedProductData) => {
    console.log("updateProduct Api called, Product ID =", productId + " and Product Data : ",updatedProductData);
    return await axios.put(`${url}/${productId}`, updatedProductData);
};
export const fetchProductData = async (productId) => {
    console.log("fetch Product Data Api called in Update.js , Product id : ",productId);
    return await axios.get(`${url}/${productId}`);
}

export const addUser = async (formData) => {
    console.log("signup post api reached");
    return await axios.post(`${url}/signup`, formData);
}

export const login = async (loginData) =>{
    console.log(loginData);
    return await axios.get(`${url}/sign-in`,loginData);
}

// export const addGoogleUser = async (googleEmail , googlePictureLink ,isGoogleAccount) =>{
//     console.log("Google post api reached");
//     console.log(googleEmail + " "+ googlePictureLink);
//     // return await axios.post(`${url}/signup`,googleEmail , googlePictureLink ,isGoogleAccount);
// }