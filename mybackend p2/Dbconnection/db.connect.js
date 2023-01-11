import mongoose from 'mongoose';

export const ConectionDB=async()=>{
   try{
    mongoose.set('strictQuery', false);
       mongoose.connect("mongodb://127.0.0.1:27017/Blog",{
        useNewUrlParser:true,
           useUnifiedTopology:true,
       })

       console.log("Connected to database........");
   }
   catch(err){
console.log("Db connection error : ",err)
   }
}