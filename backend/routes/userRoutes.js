import express from 'express';
import bcrypt from 'bcryptjs'
import db from '../db';




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
