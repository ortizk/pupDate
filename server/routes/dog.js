var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dogDb = require('../models/Dogs');

router.post('/profile', function(req, res){
	// dogDb.create(req.body)
	// .then(function(createdDog))
	res.send('something');
});

module.exports = router;