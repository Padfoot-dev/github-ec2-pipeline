const express = require("express");
const app = express();
const port = 4000;


app.get("/",(req,res)=> {
    res.send("Welcome to the express app second commit!")
})

app.get("/products",(req,res)=> {

    res.json({
        "product-id" : "101",
        "product-name":"product - 1",
        "porduct-price" : 101
    })
})

app.listen(4000 , ()=> {
    console.log(`app listening on port ${port}`)
})