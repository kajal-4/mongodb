const express=require("express");
const morgan=require("morgan");
const db=require('./mongodb')
const studentRoute=require('./Routes/studentRoute')
const app=new express();
app.use(morgan('dev'));
app.use('/api',studentRoute);


app.listen(6000,()=>{
    console.log("Listenting to port 5000")

})