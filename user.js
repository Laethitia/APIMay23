var mongoose = require("mongoose");

//Schema means setting up password
var User = new mongoose.Schema({
	username: String,
	password: String,
	token : String
});

module.exports = mongoose.model("User", User);