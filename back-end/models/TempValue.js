var mongoose = require('mongoose');

var TempValueSchema = new mongoose.Schema({
    entry: String,
}, { timestamps: true })

module.exports = mongoose.model('TempValue', TempValueSchema)