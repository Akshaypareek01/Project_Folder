import express from "express";
import { createCoustomer, getAllcoustomer, getSingelCoustomer } from "../Controllers/coustomer.controller.js";

export const homeRouter=express.Router();

homeRouter.get('/', getAllcoustomer);
homeRouter.post('/', createCoustomer);
homeRouter.get('/coustomer/:id',getSingelCoustomer)


