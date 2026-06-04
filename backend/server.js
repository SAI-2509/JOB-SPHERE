import express from "express";
import cors from "cors";
import authRoute from "./routes/UserRoutes.js";
import connectDB from "./config/db.js";
const app=express();

app.use(express.json());//middleware to read json
connectDB(); 

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true, 
}));

app.use('/api/auth',authRoute);

const PORT=process.env.PORT||3000;
console.log("connected to db");



app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
   
})