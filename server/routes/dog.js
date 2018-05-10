var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dogDb = require('../models/Dogs');
// var UserDb = require('../models/User');



// -----CREATING DOG IN THE DB
router.post('/profile', function(req, res){
	dogDb.create(req.body)
	console.log(req);

});

module.exports = router;