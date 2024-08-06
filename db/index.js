import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connDb = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`);
        console.log(`connected! host: ${connectionInstance.connection.host}`);
        
         
    }catch(error){
        console.error("CONN ERROR:",error);
        process.exit(1)
        
    }
}

export default connDb