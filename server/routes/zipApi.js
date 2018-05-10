var express 		= require('express');
var request 		= require('request');
var router 			= express.Router();
// var UserDb			= require('../models/User');
require('dotenv').config();


var SECRET_KEY = process.env.SECRET_KEY;


//-----FIND ALL THE ZIPS WITHIN 5 MILE RADIUS OF USER ZIP
router.post('/getdogsnearby', function(req, res){
	var zip = req.body.zip;
	console.log("this is coming from router", zip);
	request(`https://www.zipcodeapi.com/rest/${SECRET_KEY}/radius.json/${zip}/5/miles?minimal`
	,function(err, resp, body){
	console.log('request was made');
// -----MAKE DB CALL TO FIND USERS WITH ZIPS FROM SEARCH
	let zipResults = JSON.parse(body);
	console.log(zipResults)
	// UserDb.find({zip: {$in:zipResults.zip_codes}}).then(function(match){
	// 	console.log(match);
	// })
	console.log('err', err)
	console.log('body', body)
	res.send('temporary stub from zipapi.js');
	})
	
});



module.exports = router;
