import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/user',router);
app.use('/api/blog' ,blogRouter);

mongoose.connect(`mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASS}@cluster0.elmkicy.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser : true
},(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connection Successfull");
    }
});

app.listen(5000,()=>{
    console.log("listening on port 5000");
});