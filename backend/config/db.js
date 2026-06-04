import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("connecting...")
    await mongoose.connect("mongodb+srv://saidharshini:sai25msec@cluster0.scqnych.mongodb.net/Jobportal");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
