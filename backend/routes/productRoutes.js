import express from 'express';
import db from '../db';
import { isAdmin, isAuth} from '../util';
const router = express.Router();

 /* Product */
router.get("/",isAuth,isAdmin, async(req,res)=>{
    const Products = await db.select().from('product');
    res.send(Products)
})