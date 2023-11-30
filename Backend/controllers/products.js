import productModel from "../models/products.js";

export const getProduct = async (req, res) => {
        console.log("get api ping at backend ...");
    try {
        const productInformation = await productModel.find();
        console.log(productInformation);
        res.json(productInformation);
        console.log("Data Retrieved Successfully...");
    } catch (error) {
        console.log("Data Not Retrieved...");
    }
}

export const createProduct = async (req, res) => {
    console.log("post api reached...");

    const productName = req.body.productName ? req.body.productName.toString() : '';
    const id = req.body.productId ? req.body.productId.toString() : '';
    const description = req.body.description ? req.body.description.toString() : '';
    const price = req.body.price ? req.body.price.toString() : '';
    const image = req.body.imagePath ? req.body.imagePath.toString() : '';

    const newProduct = new productModel({
        productTitle: productName,
        productId: id,
        productDescription: description,
        price: price,
        image: image
    });

    // Handle saving newProduct to the database or other operations here
    try {
       const result =  await newProduct.save();
        console.log("Data Saved In DB...",result);
        res.json(newProduct);
    } catch (error) {
        console.log("Not Saved...");
    }
};