var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 4200;
var app = express();

//views Engine

app.set('views',path.join(__dirname,'views'));
app.set('views engine','ejs');
app.engine('html',require('ejs').renderFile);
//set static folder
app.use(express.static(path.join(__dirname,'client')));
//Body Pasrser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port, function(){
    console.log('server start on port',+port);
});
