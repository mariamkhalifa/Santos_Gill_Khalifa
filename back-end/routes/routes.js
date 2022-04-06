var express = require('express');
var path = require('path'); //had to add
var router = express.Router();

var mongoose = require('mongoose');

// for SMS
//var client = require('twilio')('AC004632a60192b5954dae171343ac1043', '06a0e833d7c89d7381f2faa242874f6a');

var LightValue = require('../models/LightValue.js')
var MoistValue = require('../models/MoistValue.js')
var TempValue = require('../models/TempValue.js')

router.post('/light-value/:entry', function(req, res, next) {
    //console.log(req.params.entry);
    LightValue.create({ entry: req.params.entry }, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/moist-value/:entry', function(req, res, next) {
    //console.log(req.params.entry);
    MoistValue.create({ entry: req.params.entry }, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/temp-value/:entry', function(req, res, next) {
    //console.log(req.params.entry);
    TempValue.create({ entry: req.params.entry }, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.get('/light-values', function(req, res, next) {
    LightValue.find(function(err, values) {
        if (err) return next(err);
        res.json(values);
    });
});

router.get('/moist-values', function(req, res, next) {
    MoistValue.find(function(err, values) {
        if (err) return next(err);
        res.json(values);
    });
});

router.get('/temp-values', function(req, res, next) {
    TempValue.find(function(err, values) {
        if (err) return next(err);
        res.json(values);
    });
});

//          ============ for SMS route ===================

// router.post('/send-message', function (req, res, next) {
//     let message = sendTextMessage(req.body.light, req.body.moisture, req.body.temp)
//     res.json(message)
// })

//          =========== for SMS code =================

// function sendTextMessage (light, moisture, temp) {
//     let messageText;
//     let messageString = `Your plant status for today. Light: ${light} Moisture: ${moisture} Temperature: ${temp}`
//     client.messages.create({
//         body: 'This is a test code',
//         to: '', 
//         from: '' 
//     })
//     .then(message => {
//         console.log(message)
//         messageText = message
//     })
//     .catch(error => {
//         console.log(error)
//     })

//     return messageText
// }



module.exports = router;