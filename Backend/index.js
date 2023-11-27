import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import express from 'express';
import { createProduct, getProduct } from "./controllers/products.js";

const app = express();


app.get("/", getProduct)

const url = "mongodb+srv://usman:tfxUsman124@cluster0.sroacgg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })

    app.use(cors());
    app.use(bodyParser.json({extended : true}));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/",createProduct);