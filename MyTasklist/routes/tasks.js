var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');

var db = mongojs('mongodb://sweetr:Abcd@1234@ds021689.mlab.com:21689/taskbord', ['tasks']);


router.get('/tasks', function (req, res, next) {
    // res.send('TASK API');
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err)
        }
        res.json(tasks);
    });
});

module.exports = router;