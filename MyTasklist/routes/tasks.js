var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://brad:brad@ds243285.mlab.com:43285/mytasklist', ['tasks'])
router.get('/tasks', function (req, res, next) {
    console.log("jddjj");
    db.tasks.find(function(err, tasks) {
        if(err){
            res.send(err)
        }
        res.json(tasks);
    });
});

module.exports = router;