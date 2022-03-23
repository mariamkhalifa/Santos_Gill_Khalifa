var mongoose = require('mongoose');

var LightValueSchema = new mongoose.Schema({
    value: Number
})

module.exports = mongoose.model('LightValue', LightValueSchema)