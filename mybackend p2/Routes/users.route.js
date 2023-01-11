import express from 'express';
import { getAllUser, userLogin, userSignUp } from '../Controllers/user.controller.js';

export const userRoute=express.Router();

userRoute.get("/",getAllUser);
userRoute.post("/signup",userSignUp);
userRoute.post("/login",userLogin);
