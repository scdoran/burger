var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
	burger.selectAll(function(data){
		console.log(data);
	});
	// res.render("index", data);
});

router.post("/", function(req, res){
	burger.insertOne([
		"burger_name", false
		console.log(data);
	], [
	req.body.burger_name
	], function(){
		// res.redirect("/");
	});
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	burger.updateOne({
		devoured: req.body.burger_name
	}, condition, function(){
		// res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;