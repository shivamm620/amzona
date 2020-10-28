import express from 'express';
import bcrypt from 'bcrypt'
import db from '../db';
import {getToken} from '../util'
const router = express.Router();

router.post('/signin' , async(req,res) =>{
    db.select('email', 'password').from('login')
    .where('email','=',req.body.email)
    .then(data=>{
        const isValid = bcrypt.compareSync(req.body.password, data[0].password);
        if(isValid){
            return db.select('*').from('users')
            .where('email', '=', req.body.email)
            .then(user=>{
                res.json({
                    name: user[0].name,
                    id : user[0].id,
                    email : user[0].email,
                    getToken:getToken(user[0])
                }
                    )
            })
            .catch(err => res.status(400).json('unable to get user'))
        }
        else{
            res.status(400).json('wrong credentials')
        }
    })
    .catch(err => res.status(400).json('wrong credentials'))
})
router.post("/register",async(req,res)=>{
    const {email, name , password} = req.body;
    const hash =  bcrypt.hashSync(password,8);
    db.transaction(trx =>{
        trx.insert({
            password: hash,
            email : email,
            isadmin:'false'
        })
        .into('login')
        .returning('email')
        .then(loginEmail =>{
            return trx ('users')
            .returning('*')
    .insert({
        email:loginEmail[0],
        name:name,
        joined: new Date()
    }).then(user =>{
        res.json({
            name: user[0].name,
            id : user[0].id,
            email : user[0].email,
            getToken:getToken(user[0])
        })
    })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register')) 
})
router.get('/createadmin' , async (req, res)=>{
    db.transaction(trx =>{
        trx.insert({
            password: bcrypt.hashSync('shivammishraadmin', 8),
            email : "shivammishra@gmail.com",
            isadmin:'true'
        })
        .into('login')
        .returning('email')
        .then(loginEmail =>{
            return trx ('users')
            .returning('*')
    .insert({
        email:loginEmail[0],
        name:'shivam',
        joined: new Date(),
        isadmin:'true'
    }).then(user =>{
        res.json(user[0])
    })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json(err.message)) 
})


export default router
