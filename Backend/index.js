import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import adminRouter from "./routes/cruds.js";
import userRouter from "./routes/users.js";
import loginRouter from "./routes/sign-in.js";
import router from "./routes/products.js";
import { loginUser } from "./controllers/sign-in.js";
import { addUser } from "./controllers/users.js";
import { addGoogleUserInDb } from "./controllers/googleUser.js";

const app = express();

const Url =
  "mongodb+srv://usman:tfxUsman124@cluster0.sroacgg.mongodb.net/?retryWrites=true&w=majority";

const startServer = async () => {
  try {
    await mongoose.connect(Url);
    console.log("Connected to the database");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRouter);
app.use("/", router);
app.get("/sign-in", loginUser);
app.post("/signup", addUser);
app.post("/google/Signup", addGoogleUserInDb);

startServer();
