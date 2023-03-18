const express  = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const path = require('path')




const app = express();

app.use(express.json());
app.use(morgan("dev"))
app.use("/upload", express.static(path.join(__dirname, "img")));



app.get("/",(req,res)=>{
    res.status("I Am Live")
})

const PORT = process.env.PORT || 3002
const DB = process.env.DB 
app.listen(PORT,()=>{
    console.log("Server is Running on PORT " + PORT);
})

mongoose.connect(DB)
.then(res => console.log("Data Base Connection Successfully"))
.catch(err => console.log("Connection Failed"))