var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dogDb = require('../models/Dogs');

router.post('/profile', function(req, res){
	dogDb.create(req.body)
	console.log(req.body);
	// .then(function(createdDog){
	// 	// have to send the newly created dog id to user
	// res.send({ dog: createdDog });
	// })
	// .catch(function(err){
	// 	console.log('err from dog.js', err);
	// 	res.status(500).send('Could not creat dog in db');
	// })
});

module.exports = router;