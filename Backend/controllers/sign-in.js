import userModel from "../models/users.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const verifiedPassword = bcrypt.compare(password, user.password);

    if (verifiedPassword) {
      // Passwords match, proceed with login logic
      console.log("Login");
      return res.status(200).json({ message: "Login successful" });
    } else {
      // Passwords don't match
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    // console.log("Error:", error);
    // return res.status(500).json({ message: "Internal server error" });
  }
};
