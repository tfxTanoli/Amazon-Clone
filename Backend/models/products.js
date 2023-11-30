import mongoose from "mongoose";

const productStructure = new mongoose.Schema({
    productTitle : String,
    productId : Number,
    productDescription : String,
    price : Number,
    image: String
});

 const productModel = mongoose.model('product',productStructure);

 export default productModel;