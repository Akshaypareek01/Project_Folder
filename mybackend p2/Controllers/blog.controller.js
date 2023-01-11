import mongoose from "mongoose";
import userModel from "../../../Masai Assigment/akshay_pw06_005/unit-7/day-4/09-Auth/database/user.model.js";
import { blogModal } from "../Modals/blog.modal.js";
import { userModal } from "../Modals/user.modal.js";

export const getAllBlogs = async (req, res) => {
  try {
    let allBlogs = await blogModal.find();
    if (allBlogs) {
      return res.status(200).send({
        status: "success",
        data: allBlogs,
      });
    } else {
      return res.status(400).send({
        message: "Blogs in Database not present",
      });
    }
  } catch (err) {
    console.log("getALL blog Error: " + err);
  }
};

export const getBlog = async (req, res) => {
  let { user } = req.params;

  try {
    let blog = await blogModal.findOne({ user });

    if (blog) {
      return res.status(200).send({
        status: "success",
        data: blog,
      });
    } else {
      return res.status(400).send({ message: "Blog user not found" });
    }
  } catch (err) {
    console.log("getBlog Error: " + err);
  }
};

export const postBlog = async (req, res) => {
  let blogData = req.body;
  let existingUser
  try{
     existingUser= await userModal.findById({_id:blogData.user});
    //  console.log("blogarr",existingUser)
    if(!existingUser){
        return res.status(404).send({
            message:"User not found user by this id"
        })
    }
    
    
}
catch(err){
    console.log("post blog Error: " + err)

}

  try {
   
let newBlog= await blogModal.create(blogData)
let id=newBlog._id

let Blogarr = await userModal.findByIdAndUpdate(blogData.user, {
  $addToSet: {
    blogs:id
}
});



let dataw= await userModal.findById(blogData.user);
// console.log(Blogarr);
    return res.status(200).send({
      status: "success",
      data: dataw,
    });
  } catch (err) {
    console.log("postBlog Error: " + err);
    return res.status(500).send({message: err});
  }
};

export const updateBlog = async (req, res) => {
  let { title, discription } = req.body;
  let blogId = req.params.id;
  let updatedBlog;
  try {
    updatedBlog = await blogModal.findByIdAndUpdate(blogId, {
      title,
      discription,
    });
    return res.status(200).send({});
    if (!updatedBlog) {
      return res.status(500).send({
        message: "Enabel to update blog..",
      });
    }

    return res.status(200).send({
      status: "Success",
      data: updatedBlog,
    });
  } catch (err) {
    console.log("Error updating blog", err);
  }
};

export const deleteBlog = async (req, res) => {
  let blogID = req.params.id;
  let deleteBlog;
  try {
    deleteBlog = await blogModal.findByIdAndRemove(blogID);
    if (!deleteBlog) {
      return res.status(500).send({ message: "Error while deleting blog" });
    }
    return res.status(200).send({
      status: "Success",
    });
  } catch (err) {
    console.log("Error deleting blog", err);
  }
};
