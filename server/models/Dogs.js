var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DogSchema = new Schema({
	DogName: String,
	breed: String,
	temperment: String,
	age: Number,
	size: String
});

module.exports = mongoose.model('Dogs', DogSchema);
