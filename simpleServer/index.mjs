import express from "express";

const app=express();

app.get('/',(req,res)=>{
    res.send('Sajid responding from HTTP server')
})

const PORT=5001;

app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`)
})