var mongoose = require("mongoose");


var commentSchema = new mongoose.Schema({
	body: {type: String, default:""},
	username: {type: String, default:""}
})

module.exports = mongoose.model("Comment", commentSchema)