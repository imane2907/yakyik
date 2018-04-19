var express = require("express");
 var router = express.Router();

router.get("/", function(req, res){
	res.render("index")
});
router.get("/createzone", function(req, res){
	res.render("createzone")
})
router.get("/createComment", function(req, res){
	res.render("createComment")
})


 module.exports = router