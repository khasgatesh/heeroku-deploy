const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send("Heroku")
})

app.listen(3000,()=>{
    console.log("running port:3000")
})