import mongoose from "mongoose";

const withTimeout = (promise, ms) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("MongoDB connection timed out")), ms)
    ),
  ]);

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error("MongoDB connection failed: MONGO_URI is missing.");
      return false;
    }

    console.log("connecting...")
    await withTimeout(
      mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 10000,
      }),
      10000
    );
    console.log("MongoDB Connected Successfully");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    return false;
  }
};

export default connectDB;
