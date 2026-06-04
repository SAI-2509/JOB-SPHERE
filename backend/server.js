import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import authRoute from "./routes/UserRoutes.js";
import connectDB from "./config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

app.use(express.json());//middleware to read json

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true, 
}));

app.use('/api/auth',authRoute);

const PORT=process.env.PORT||3000;

const isDBConnected = await connectDB();
if (!isDBConnected) {
    console.log("Server is starting without MongoDB. Check MONGO_URI, internet, DNS, and Atlas Network Access.");
}

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
   
})
