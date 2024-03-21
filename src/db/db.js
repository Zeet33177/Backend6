
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
       const connectInstance =  await mongoose.connect(`mongodb+srv://zeetpc33177:Dragon33177@cluster0.syaiux4.mongodb.net/${DB_NAME}`)
       //const connectInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected, DB Host : ${connectInstance.connection.host}`);
    } catch (error) {
        console.log('MONGO DB connection error',error);
        process.exit(1)
    }
}
export default connectDB