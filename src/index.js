import mongoose  from "mongoose";
import { DB_NAME } from "./constants.js";
import connDb from "../db/index.js";
// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})
connDb()




















// import express from "express"
// const app =express()
// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error:",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{`Listening  on port ${process.env.PORT}`})
//     }catch(error){
//         console.error("ERROR:",error);
//         throw error
//     }
// })()