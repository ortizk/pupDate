var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dogDb = require('../models/Dogs');
var UserDb = require('../models/User');



// -----CREATING DOG IN THE DB
router.post('/profile', function(req, res){
	let user = req.body.user
	UserDb.findById(user.id, (err, user) => {
		dogDb.create(req.body.dog, (err, dog) =>{
			user.dogs.push(user);
			user.save();
		})
	});
	res.send('Success');
});
	// console.log(req.body.user.id);

	// dogDb.create(req.body.dog);
	// console.log(dog);
	// dogDb.getCollection('dogs').find({},function(err, dog){
	// 	if(err){
	// 	console.log(err);
	// }
	// 	console.log(dog);
	// })
	
	// UserDb.findById(user.id, (err, user) => {
	// 	user.dogs.push(dogId);
	// 	user.save();
	// })

// });

module.exports = router;