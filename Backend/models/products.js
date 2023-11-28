import mongoose from "mongoose";

const productStructure = new mongoose.Schema({
    productName : String,
    productId : Number,
    productDescription : String,
    price : Number,
    image: String
});

 const productModel = mongoose.model('product',productStructure);

 export default productModel;