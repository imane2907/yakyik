var express = require("express");
var router = express.Router();
var Zone = require("../models/zone")
var Comment = require("../models/comment")
var controllers = require("../controllers/index")


router.get("/:resource", function(req, res){
	var resource = req.params.resource
	var controller = controllers[resource]
	if(controller == null){
		res.json({
			confirmation: "fail",
			message: "invalid resource request: " + resource
		})
	}
	
    controller.find(req.query, function(err, results){
    	if(err){
    		res.json({
    			confirmation: "fail",
    			message: err
    		})
    	} else {
    		res.json({
    			confirmation: "success",
    			results: results
    		})
    	}
    })

})
router.get("/:resource/:id", function(req, res){
	var resource = req.params.resource;
	var id = req.params.id
	var controller = controllers[resource]
	if(controller == null){
		res.json({
			confirmation: "fail",
			message: "invalid resource request: " + resource
		})
	}
	
		controller.findById(id, function(err, result){
		if(err){
			res.json({
				confirmation: "fail",
				message: err
			})
		} else {
			res.json({
				confirmation: "success",
				result: result
			})
		}
	  })
	
	
})
router.post("/:resource", function(req, res){
	var resource = req.params.resource;
	var controller = controllers[resource]
	if(controller == null){
		res.json({
			confirmation: "fail",
			message: "invalid resource request: " + resource
		})
	}
	
		controller.create(req.body, function(err, result){
		if(err){
			res.json({
				confirmation: "fail",
				message: err
			})
		} else {
			res.json({
				confirmation: "success",
				result: result
			})
		}
	})
	
	
})
router.put("/:resource/:id", function(req,res){
	var resource = req.params.resource;
	var id = req.params.id;
	var controller = controllers[resource]
	if(controller == null){
		res.json({
			confirmation: "fail",
			message: "invalid resource request: " + resource
		})
	}
	
		controller.update(id, req.body, function(err, result){
			if(err){
				res.json({
					confirmation: "fail",
					message: err
				})
			} else {
				res.json({
					confirmation: "success",
					result: result
				})
			}
		})
	
})
router.delete(":/resource/:id", function(req, res){
	var resource = req.params.resource;
	var id = req.params.id;
	var controller = controllers[resource]
	if(controller == null){
		res.json({
			confirmation: "fail",
			message: "invalid resource request: " + resource
		})
	}
	
		controller.delete(id, function(err){
			if(err){
				res.json({
					confirmation: "fail",
					message: err
				})
			} else {
				res.json({
					confirmation: "success",
					message: "the item is deleted"
			    })
			}    
		})
	
})

module.exports = router;