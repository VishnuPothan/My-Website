const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/",(req,res) =>{
    res.send("Home page");
});

app.listen(8080 , function(){
    console.log("Listening at port 8080");
});