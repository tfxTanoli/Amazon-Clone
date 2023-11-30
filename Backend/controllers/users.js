import userModel from "../models/users.js";

export const addUser = async (req , res) =>{
    console.log("post api reached...");

    // const name = req.body.username;
    // const email = req.body.email;
    // const pass = req.body.password;

    const { username, email, password } = req.body;

    const newUser = new userModel({
        name : username,
        email : email,
        password : password
    });

    // Handle saving newProduct to the database or other operations here
    try {
       const result =  await newUser.save();
        console.log("Data Saved In DB...");
        res.json(newUser);
    } catch (error) {
        console.log("Not Saved...");
    }
};