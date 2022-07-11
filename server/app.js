const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes/book-routes');
const cors = require('cors');

const app = express();

app.use(express.json());
// middleware
app.use(cors());
app.use("/books",router);


mongoose.connect("mongodb+srv://vishal1809:Password@cluster0.kkq76bg.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>{console.log("Connected!");})
.then(()=>{
    app.listen(5000);
})
.catch((err)=>{console.log(err);})