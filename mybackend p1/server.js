import express from 'express';
import { Dbconnection } from './Dbconnection/db.connect.js';
import { homeRouter } from './Routes/home.route.js';

const app=express();

app.use(express.json());

app.use('/', homeRouter)


Dbconnection();

const port=process.env.PORT || 4000
app.listen(port,()=>{
    console.log('listening on port: ',port);
})

// import express from "express";

// const app=express();

// app.use(express.json());

// app.get("api/users/"(req,res)=
// )


// app.listen(4000,()=>{
//     console.log("Listing on port 4000")
// })