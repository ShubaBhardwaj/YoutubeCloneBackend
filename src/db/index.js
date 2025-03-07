import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInatant = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Connected to MongoDB: ${connectionInatant.connection.host}`);
    } catch (error) {
        console.log("Error come from the MonogoDB",error);
        process.exit(1);
    }
}

export default connectDB;