

var express= require('express');
var mongoose = require('mongoose');
var bodyparser =require('body-parser');
var cors = require('cors');
var path =require('path');


var app =express();
const route = require('./routes/route');
// connect to mongo
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connect to the database');
});

//Error connection

mongoose.connection.on('error',(err)=>{
if(err){
    console.log("error",err);
}

});


const port =3000;
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'src')))
app.use('/api',route);

app.get('/',(req,res)=>{
    res.send('hiiii');
});



app.listen(port,()=>{
    console.log("server started");
})
