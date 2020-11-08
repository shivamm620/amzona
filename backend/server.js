import express from 'express';
import data from  './data'
import bodyParser from 'body-parser';
import userRoute from './routes/userRoutes'
const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoute)
app.get('/api/products/:name',(req,res)=>{
    const productId = req.params.name;
    const product = data.products.find(x=> x.name === productId);
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
