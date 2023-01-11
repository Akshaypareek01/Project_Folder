import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   discription:{
    type:String,
    required:true,
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Users",
    required:true,
   },
   Image:{
    type:String,
    required:true,
   }
})

export const blogModal=mongoose.model("blogs",blogSchema)