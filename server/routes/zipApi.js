var express 		= require('express');
var router 			= express.Router();
var request 		= require('request');
require('dotenv').config();


var SECRET_KEY = process.env.SECRET_KEY;


//-----FIND ALL THE ZIPS WITHIN 5 MILE RADIUS OF USER ZIP
router.get('http://localhost:3001/getdogsnearby', function(req, res){
	var zip = 98104;
	request(`https://www.zipcodeapi.com/rest/${SECRET_KEY}/radius.json/${zip}/5/mile?minimal`
	,function(err, resp, body){
	console.log('request was made');
	console.log('err', err)
	console.log('body', body)
	res.send('temporary stub');
	})
});

module.exports = router;
