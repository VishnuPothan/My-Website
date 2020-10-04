const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.set('trust proxy', true);


app.get("/",(req,res) =>{
    res.render("pages/index");
});

app.listen(8080 , function(){
    console.log("Listening at port 8080");
});