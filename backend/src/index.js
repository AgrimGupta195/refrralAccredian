import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import referralRoutes from "../routes/referralRoutes.js";
import path from "path";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cors({
    origin:"https://accredian-frontend-task-iota-six.vercel.app",
    credentials:true,
}));
app.use("/api/referrals", referralRoutes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'../frontend/dist')))
  app.get("*",(req,res)=>{
      res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
  })
}
app.get("/", (req, res) => {
  res.send("Backend is running...");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
