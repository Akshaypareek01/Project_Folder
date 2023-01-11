import mongoose from "mongoose";

export const Dbconnection=async()=>{

    try{
        mongoose.set('strictQuery', false);
        mongoose.connect("mongodb://127.0.0.1:27017/coustomers",{
           
           useNewUrlParser:true,
           useUnifiedTopology:true,

        })

        console.log("Successfully connected to Mongo Database")
    }
    catch(err){
          console.log("Databser error: ",err)
    }
    
}


