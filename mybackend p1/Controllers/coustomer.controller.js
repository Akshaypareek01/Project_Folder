import { coustomerModal } from "../Modals/coustomer.model.js"

export const getAllcoustomer=async(req,res)=>{
   let alldata= await coustomerModal.find()

   if(alldata.length>0){
    return res.send({
        status:"success",
        data:alldata
       })
   }
   else{
    return res.send({
        status:"success but no data"
        
       })
   }
   
}

export const createCoustomer=async(req,res)=>{
   const data=req.body;
   const result=await coustomerModal.create(data);
   res.send({
        status:"success created coustomer",
        data:result
    
   })
}

export const getSingelCoustomer=async(req,res)=>{
    const id=parseInt(req.params.id);

    res.send({
        status:"success",
        id:id
    })
}