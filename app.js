const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 8080;

//mongodb connect
const mongoDBUserName = process.env.MONGODB_USERNAME;
const mongoDBPassword = process.env.MONGODB_PASSWORD;
const mongoDBUrl =  `mongodb+srv://${mongoDBUserName}:${mongoDBPassword}@cluster0.cxmpb.gcp.mongodb.net/RepositoryDetails?retryWrites=true&w=majority`;
mongoose.connect(mongoDBUrl ,{ useUnifiedTopology: true , useNewUrlParser: true});

//schema setup
let repoSchema = new mongoose.Schema({
    name: String,
    description: String
});

let  RepoDetails = mongoose.model("RepoDetails" , repoSchema);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.set('trust proxy', true);


app.get("/",(req,res) =>{
    res.render("pages/index");
});

app.listen(PORT , function(){
    console.log("Listening at port 8080");
});