import express, { Router } from 'express';
import dotenv from 'dotenv';
import config from '../config';
import User from '../model/userModel'
const router = express.Router();
dotenv.config();
router.get('/createadmin' , async (req,res)=>{

    try {
        const user = new User ({
            name:'admin',
            email:'shivammishra@gmail.com',
            password:" S@s62073200;micro",
            isAdmin:true
        });
        const newUser = await user.save();
        res.send(user) ;
    } catch (error) {
        res.send({msg:error.message})
    }

   
})

export default router;