import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import express from 'express';

const app = express();


app.get("/", (req,res) =>{
    res.write("home page loading...");
    res.end();
})

const url = "mongodb+srv://usman:tfxUsman124@cluster0.sroacgg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });
