var mongoose = require('mongoose');

var MoistValueSchema = new mongoose.Schema({
    entry: Number
}, { timestamps: true });

module.exports = mongoose.model('MoistValue', MoistValueSchema)