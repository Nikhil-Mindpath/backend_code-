// require('dotenv').config({path : './env'})
// require('dotenv').config({path : './env'})
import "dotenv/config.js"
// console.log(process.env); // insted we use dotenv.config to maintain consitency 

import dotenv from 'dotenv'
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";
// dotenv.config({
//     path : './env'
// })

// const app  = express()


// function connectDB(){}
 //  Approach 1 
/*;(async ()=>{
  try {
   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("Error on express" ,console.error());
    throw error
   })

   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
   })
  } catch (error) {
    console.error("Error in mongooes:" ,error)
    throw err
  }
})()*/


connectDB()
.then(()=>{
  app.on("error",(error)=>{
    console.log("ERROR: ",error);
    throw error ;
  })
 app.listen(process.env.PORT || 8000,()=>{
  console.log(` Server is running at port ${process.env.PORT}`);
 })
})
.catch((err)=>{
  console.log("Mongo db connection failed !!! ",err);
})
