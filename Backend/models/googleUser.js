import mongoose from "mongoose";

const googleUserStructure = new mongoose.Schema({
    fullName : String,
    email : String
});

const googleModel = mongoose.model("GoogleUserData" , googleUserStructure);

export default googleModel;