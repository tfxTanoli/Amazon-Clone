import productModel from "../models/products.js";

export const getProduct = async (req, res) => {
    // res.write("Home page loading...");
    // res.end();
    try {
        const productInformation = await productModel.find();
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

    console.log(productName);
    console.log(id);
    console.log(description);
    console.log(price);
    console.log(image);

    const newProduct = new productModel({
        productTitle: productName,
        productId: id,
        productDescription: description,
        price: price,
        image: image
    });

    // Handle saving newProduct to the database or other operations here
    try {
        await newProduct.save();
        console.log("Data Saved In DB...");
        res.json(newProduct);
    } catch (error) {
        console.log("Not Saved...");
    }
};