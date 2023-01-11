import express from 'express';
import { ConectionDB } from './Dbconnection/db.connect.js';
import { blogRoute } from './Routes/blogs.route.js';
import { userRoute } from './Routes/users.route.js';

const app=express();

app.use(express.json());

app.use("/api/users",userRoute)
app.use("/api/blogs",blogRoute)
const port=process.env.PORT || 4000;
ConectionDB();
app.listen(port,()=>{
    console.log("Listing on port :",port)
})