var mongoose = require('mongoose');

var MoistValueSchema = new mongoose.Schema({
    value: Number
})

module.exports = mongoose.model('MoistValue', MoistValueSchema)