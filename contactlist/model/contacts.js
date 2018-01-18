const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({

    'first_name': {
        type: 'string',
        required: true
    },
    'last_name': {
        type: 'string',
        required: true
    },
    'phone': {
        type: 'string',
        required: true
    }
});

const Contact = module.exports = mongoose.model('Contact',ContactSchema);
