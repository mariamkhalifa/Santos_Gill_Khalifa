var mongoose = require('mongoose');

var LightValueSchema = new mongoose.Schema({
    entry: Number,
}, { timestamps: true });

module.exports = mongoose.model('LightValue', LightValueSchema)