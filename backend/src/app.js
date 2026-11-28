import express from "express";
import authRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

app.get("/health",(req,res)=>{
    res.send("Someone is fightig and they are too loud...")
});

app.use("/api/auth",authRouter)

export default app;