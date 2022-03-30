var express = require('express');
var path = require('path'); //had to add
var router = express.Router();

var mongoose = require('mongoose');
var LightValue = require('../models/LightValue.js')
var MoistValue = require('../models/MoistValue.js')
var TempValue = require('../models/TempValue.js')

router.post('/light-value/:entry', function(req, res, next) {
    console.log(req.params.entry);
    LightValue.create({ entry: req.params.entry }, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/moist-value/:entry', function(req, res, next) {
    console.log(req.params.entry);
    MoistValue.create({ entry: req.params.entry }, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/temp-value/:entry', function(req, res, next) {
    console.log(req.params.entry);
    TempValue.create({ entry: req.params.entry }, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = router;