const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vishnu:iT7dYh2bmz7AHVj7@cluster0.cxmpb.gcp.mongodb.net/RepositoryDetails?retryWrites=true&w=majority",{ useUnifiedTopology: true , useNewUrlParser: true});

//schema setup
let repoSchema = new mongoose.Schema({
    name: String,
    description: String
});

let  RepoDetails = mongoose.model("RepoDetails" , repoSchema);
RepoDetails.create(
    {
        name: "Quizzer",
        description: "Som  e random project" 
    },(err,RepoDetails)=>{
        if(err){
            console.log(err);
        } else{
            console.log("Created new DB");
            console.log(RepoDetails);
        }
    });

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.set('trust proxy', true);


app.get("/",(req,res) =>{
    res.render("pages/index");
});

app.listen(8080 , function(){
    console.log("Listening at port 8080");
});