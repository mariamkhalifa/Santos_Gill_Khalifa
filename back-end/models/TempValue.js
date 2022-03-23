var mongoose = require('mongoose');

var TempValueSchema = new mongoose.Schema({
    value: String
})

module.exports = mongoose.model('TempValue', TempValueSchema)