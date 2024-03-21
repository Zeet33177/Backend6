// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
dotenv.config({path: './env'})
import connectDB from "./db/db.js"; //???
// database se jab bhi connect karo, async await lgao and try catch bhi lgao#betterApproach
connectDB()






















/*
import express from "express";
const app = express()
;(async ()=>{
   try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("Express can't connect properly");
          throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening at ${process.env.PORT}`);
    })
    }
   catch(error){
    console.log(error);
    throw error
   }
})()
*/