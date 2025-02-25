import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import referralRoutes from "../routes/referralRoutes.js";
import path from "path";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
const connectDB =async () => {
  try {
      const connection = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
      console.log(error);
  }
}
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5174",
  credentials:true,
}
));
connectDB();
app.use("/api/referrals", referralRoutes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'../frontend/dist')))
  app.get("*",(req,res)=>{
      res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
  })
}
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
