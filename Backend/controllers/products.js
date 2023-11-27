export const getProduct = (req, res) =>{
    res.write("Home page loading...");
    res.end();
}

export const createProduct = (req , res) =>{
    console.log("post api reached...");
    const product = req.body.productName;  

    console.log(product);
   



}