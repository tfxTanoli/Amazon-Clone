import userModel from "../models/users.js";
<<<<<<< HEAD
import jwt from "json-web-token";
=======
import bcrypt from "bcrypt";
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f

export const addUser = async (req, res) => {
  console.log("post api reached...");

<<<<<<< HEAD
  const { username, email, password } = req.body;
=======
    // const name = req.body.username;
    // const email = req.body.email;
    // const pass = req.body.password;z
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f

  const newUser = new userModel({
    name: username,
    email: email,
    password: password,
  });

<<<<<<< HEAD
  try {
    const result = await newUser.save();
    console.log("Data Saved In DB...");

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      "your_secret_key_here",
      { expiresIn: "1h" }
    );

    res.json({ token }); // Return the token in the response after successful signup
  } catch (error) {
    console.log("Not Saved...");
    res.status(500).json({ error: "Could not save user." });
  }
};

export const addGoogleUser = async (req, res) => {
  const { email, picture, isGoogle } = req.body;

  const newUser = new googleUserModel({
    email: email,
    picture: picture,
    isGoogle: isGoogle,
    // Add other necessary fields if needed or handle them accordingly
  });

  try {
    const result = await newUser.save();
    console.log("Google Sign-Up Data Saved In DB...");
    res.json(newUser);
  } catch (error) {
    console.log("Google Sign-Up Data Not Saved...");
    res.status(500).json({ error: "Failed to save Google user" });
  }
};
=======
    // const existingUser = userModel.find({email : email});

    // console.log(password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    console.log(hashedPassword);
    
    const newUser = new userModel({
        name : username,
        email : email,
        password : hashedPassword
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
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f
