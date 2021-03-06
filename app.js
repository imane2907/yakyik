var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path")
var mongoose = require("mongoose");
var apiRoutes = require("./routes/api");
var indexRoutes = require("./routes/index")
var ENV = require("./.env")

mongoose.connect(ENV.mgdb, function(err){
	if(err){
		console.log("failed to connect")
	} else {
		console.log("connected to database")
	}
})

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, './dist')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(indexRoutes);
app.use("/api", apiRoutes);



app.listen(3000, function(){
	console.log("Sever is Running")
})