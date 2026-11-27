import app from "./src/app.js";
import env from "./src/config/env.js";
import connectDB from "./src/config/database.js";

connectDB();

app.listen(env.PORT,(req,res)=>{
    console.log(`Server is running on port ${env.PORT}`);
})