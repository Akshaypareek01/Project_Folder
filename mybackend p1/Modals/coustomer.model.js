import mongoose from "mongoose";

const coustomerSchema=new mongoose.Schema({
    email:{
        type:String
    },
    name:{
        type:String
    },
    password:{
        type:Number
    }

})


