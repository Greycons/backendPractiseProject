// import mongoose  from "mongoose";
// import { DB_NAME } from "./constants.js";
// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv" 
import {app} from './app.js'
import connDb from "../db/index.js";

dotenv.config({
    path:'./env'
})

connDb()

.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{ 
        console.log(`Server running onn ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("mongo connection failed", error.message);
    
})

// mongoose.connection.on('error', (err) => {
//     console.error('Mongoose connection error:', err);
//     process.exit(1);   

//   });

















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