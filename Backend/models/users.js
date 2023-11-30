import mongoose from "mongoose";

const userStructure = new mongoose.Schema({
   name : String,
   email : String,
   password : String
});

 const userModel = mongoose.model('User',userStructure);

 export default userModel;