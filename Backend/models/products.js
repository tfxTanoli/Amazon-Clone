import mongoose from "mongoose";

const productStructure = new mongoose.Schema({
    productName : String,
    productId : Number
});

 const productModel = mongoose.Model('product',productStructure);

 export default productModel;