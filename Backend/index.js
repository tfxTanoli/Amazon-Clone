import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
<<<<<<< HEAD
import express from 'express';
import adminRouter from "./routes/cruds.js";
import userRouter from "./routes/users.js";
import loginRouter from "./routes/sign-in.js";
import router from "./routes/products.js";
import { addUser  } from "./controllers/users.js";
import { loginUser } from "./controllers/sign-in.js";
import { addGoogleUserInDb } from "./controllers/googleUser.js";
=======
import express from "express";
import router from "./routes/products.js";
// import userRouter from "./routes/users.js";
import adminRouter from "./routes/crud.js";
import { addUser } from "./controllers/users.js";
// import loginRouter from "./routes/sign-in.js";
import { loginUser } from "./controllers/sign-in.js";
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f

const app = express();

const url =
  "mongodb+srv://usman:tfxUsman124@cluster0.sroacgg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log("Connected to the database");
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});

<<<<<<< HEAD
    app.use(cors());
    app.use(bodyParser.json({extended : true}));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/admin",adminRouter);
    app.use("/",router);
    app.post("/signup", addUser);
    app.get("/sign-in", loginUser);

    app.post("/google/Signup", addGoogleUserInDb);
=======
// app.use(
//   cors({
//     origin: "https://adorable-valkyrie-b23b22.netlify.app",
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin", adminRouter);
app.use("/", router);
app.get("/sign-in", loginUser);
app.post("/signup", addUser);
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f
