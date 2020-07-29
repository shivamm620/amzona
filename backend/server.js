import express from 'express';
import data from  './data'
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import userRoute from './routes/userRoutes'
dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoute)
app.get('/api/products/:id',(req,res)=>{
    const productId = req.params.id;
    const product = data.products.find(x=> x._id === productId);
    if(product)
        res.send(product);
    else
        res.status(404).send({msg:"Product Not Found"})
    
    
})

app.get('/api/products',(req,res)=>{
    res.send(data.products);
})

app.listen(5000,()=>{
    console.log("server is runing on port 5000");
}

)