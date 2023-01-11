import { userModal } from "../Modals/user.modal.js";
import bcrypt from "bcryptjs"


export const getAllUser=async(req,res)=>{
    let users;
    try{
        users=await userModal.find();

        if(!users){
            return res.status(404).send({
                message:"No users Found in database"
            })
        }
        return res.send({
            status:"success",
            data:users
        })
    }
    catch(err){
        console.log("GetAllUser Error: " + err)
    }

    
}

export const userSignUp=async(req,res)=>{

    const userDetails=req.body;
    let existingUser;
    try{
        existingUser=await userModal.findOne({email:userDetails.email});

        if(existingUser){
            return res.status(400).send({
                message:"User already exists Login Insted"
            })
        }
        else{
            const {name,email,password}=userDetails;

            const hashedPassword=bcrypt.hashSync(password)

            const newUser=await userModal.create({
                name,
                email,
                password:hashedPassword,
            
            });
            return res.status(200).send({
                status:"success",
                data:newUser
            })
        }
        
        
    }
    catch(err){
        console.log("userSignUp Error: " + err);

    }
}



export const userLogin=async(req,res)=>{
  
    let userSigninDetails=req.body;
    const {email,password}=userSigninDetails;
    try{
        const existingUser= await userModal.findOne({email})
        if(!existingUser){
            return res.status(404).send({
                message:"User not found SignUp First"
            })
        }
        else{
             let match=bcrypt.compareSync(password,existingUser.password);

             if(match){
                return res.status(200).send({
                    status:"sucess",
                    Auth:"true"
                })
             }
             else{
                    return res.status(400).send({
                        Auth:"false",
                        message:"Invalid Password try again"
                    })
             }
        }
    }
    catch(err){
        console.log("userSignIn Error: " + err)

    }
}