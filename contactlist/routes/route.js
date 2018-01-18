
const express = require('express');
const router = express.Router();

const Contact = require('../model/contacts');


// resiving contacts
router.get('/contacts', (req, res, next) => {
    //res.send('resiving the cont list');
    Contact.find(function (err, Contact) {
        res.json(Contact);
    });
});

//add contacts
router.post('/contacts', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, connect) => {
        if (err) {
            res.json({ mgs: 'Faild to add' });
        }
        else {
            res.json({ mgs: 'Contact added succesfully' });
        }
    })

});

//delete contacts
router.delete('/contacts', (req, res, next) => {

});


module.exports = router;