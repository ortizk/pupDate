var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dogDb = require('../models/Dogs');
var UserDb = require('../models/User');



// -----CREATING DOG IN THE DB
router.post('/profile', function(req, res){
	// -----CREATING NEW DOG AND GETTING THAT NEW DOGS' ID
	dogDb.create(req.body.dog, function(err, dog){
		var newDogId = dog._id
		// -----ADDING DOG ID TO USER DB ---userBe userBackEnd
		var userBe = req.body.user;
		UserDb.findById(userBe.id, (err, userParam) => {
			if(err){
				console.log(err);
			} 
			else {
			userParam.dogs.push(newDogId);
			userParam.save();
			};
			res.send('success');
	});
	});



});



module.exports = router;

