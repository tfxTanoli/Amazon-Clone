import mongoose from "mongoose";

const productStructure = new mongoose.Schema({
    id : Number,
    price : Number,
    image : String,
    description : String,
    quantity : Number,
    category : ["shirts","lights","toys","households"]
});

const productModel = mongoose.Model("Product",productStructure);

export default productModel;