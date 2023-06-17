const express = require('express')
const path = require('path')
const app = express()
const Port = 8080

app.get('/',(req,res)=>{
res.send("teste")
})

app.listen(Port,(req,res)=>{
    console.log("localhost:8080/")
})
