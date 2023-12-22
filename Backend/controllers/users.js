import userModel from "../models/users.js";
import jwt from "json-web-token";
import bcrypt from "bcrypt";

export const addUser = async (req, res) => {
  console.log("post api reached...");
  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: username,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log("Data Saved In DB...");

    // Generate JWT token
    const token = jwt.sign(
      { userId: savedUser._id, email: savedUser.email },
      "your_secret_key_here",
      { expiresIn: "1h" }
    );

    res.json({ token }); // Return the token in the response after successful signup
  } catch (error) {
    console.log("Not Saved...", error);
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