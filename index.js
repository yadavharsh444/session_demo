const express = require('express')

const app = express();


app.get("/",(req,res)=>{
    res.send("Welcome to the code")
})
//

app.listen(3000, ()=>{
    console.log("Connected to the server")
})