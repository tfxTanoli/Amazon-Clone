import productModel from "../models/products.js";

export const getProduct = async (req, res) => {
        // console.log("get api ping at backend ...");
    try {
        const productInformation = await productModel.find();
        // console.log(productInformation);
        res.json(productInformation);
        // console.log("Data Retrieved Successfully...");
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
        console.log("Data Saved In DB...");
        res.json(newProduct);
    } catch (error) {
        console.log("Not Saved...");
    }
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.productId; // Access productId from URL parameter

  console.log("Product ID received at backend:", productId);

  try {
    const deletedProduct = await productModel.findOneAndDelete({
      productId: productId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    console.log("Product deleted successfully:", deletedProduct);
    res.json(deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
  

  export const putProduct = async (req, res) => {
    const { productId } = req.params;
    const productData = req.body;
  
    try {
      // Find the product to be updated
      const product = await productModel.findById(productId);
  
      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }
  
      // Update the product with the provided data
      product.productTitle = productData.productTitle || product.productTitle;
      product.productDescription = productData.productDescription || product.productDescription;
      product.price = productData.price || product.price;
      product.image = productData.image || product.image;
  
      // Save the updated product to the database
      await product.save();
  
      res.status(200).send({ message: 'Product updated successfully' });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).send({ message: 'Internal server error' });
    }
  };
