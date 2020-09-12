const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    imagepath: { type: String},
    text: { type: String }
});

module.exports = {Employee} ;