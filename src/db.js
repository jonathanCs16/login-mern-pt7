import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://jonathansanchez1612:jesus1612@cluster0.jr16hm9.mongodb.net/"); 
       console.log(">> DB Connect "); 
    } catch (error) {
        console.log(error)
    }
};