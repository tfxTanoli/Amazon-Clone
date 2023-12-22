import axios from "axios";

// const url = "https://react-project-backend-three.vercel.app";

const url = "https://localhost:5000";

export const sendMessageViaAxios = async (productData) => {
  console.log("axios api reached..");
  return await axios.post(`${url}/`, productData);
};

export const getProduct = async () => {
  console.log("get api reached ");
  return await axios.get(`${url}/`);
};

export const deleteProduct = async (productId) => {
  console.log("Api called to Delete Product with Product id => ", productId);
  return await axios.delete(`${url}/${productId}`);
};

export const updateProduct = async (productId, updatedProductData) => {
  console.log(
    "updateProduct Api called, Product ID =",
    productId + " and Product Data : ",
    updatedProductData
  );
  return await axios.put(`${url}/${productId}`, updatedProductData);
};
export const fetchProductData = async (productId) => {
  console.log(
    "fetch Product Data Api called in Update.js , Product id : ",
    productId
  );
  return await axios.get(`${url}/${productId}`);
};

export const addUser = async (formData) => {
<<<<<<< HEAD
    console.log("signup post api reached");
    return await axios.post(`${url}/signup`, formData);
}

export const addGoogleUser = async (googleObj) =>{
    console.log("Add google user : ",googleObj);
    axios.post(`${url}/google/Signup`,googleObj);
}

// export const addGoogleUser = async (email, picture, isGoogle) => {
//     console.log("google post api reached");
//     return await axios.post(`${url}/signup/${isGoogle}`, { email, picture, isGoogle }); // Send email, picture, and isGoogle in the request body
// }

export const login = async (loginData) =>{
    return await axios.get(`${url}/sign-in`,loginData);
}
=======
  console.log("signup post api reached");
  return await axios.post(`${url}/signup`, formData);
};

export const login = async (loginData) => {
  console.log(loginData);
  return await axios.get(`${url}/sign-in`, loginData);
};

// export const addGoogleUser = async (googleEmail , googlePictureLink ,isGoogleAccount) =>{
//     console.log("Google post api reached");
//     console.log(googleEmail + " "+ googlePictureLink);
//     // return await axios.post(`${url}/signup`,googleEmail , googlePictureLink ,isGoogleAccount);
// }
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f
