// Requiring express and the burger.js files in order to route the html or user prompts to the ORM, then the database. 
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

// This is prompting the burger.js, which will point to the ORM in order to select all of the data from the database.
router.get("/", function(req, res){
	burger.selectAll(function(data){
		var burgerObj = {
      		burger: data
    	};
		res.render("index", burgerObj);
	});
});
// This is pointing to burger.js to insertOne, which will point to the ORM in order to insert new data from the database.
router.post("/", function(req, res){
	burger.insertOne([
		"burger_name", "devoured"
	], [
	req.body.burger_name, req.body.devoured
	], function(){
		res.redirect("/");
	});
});
// This is pointing to burger.js to updateOne, which will point to the ORM in order to update the data from the database based on the id of the button that was clicked on.
router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;