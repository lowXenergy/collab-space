import express from "express";

const app = express();
express.json();

app.get("/health",(req,res)=>{
    res.send("Someone is fightig and they are too loud...")
});

export default app;