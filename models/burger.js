// Import the ORM to interact with the database.
var orm =require("../config/orm.js");

// Creating a burger object containing all of the functions needed for the ORM to communicate with the database.
var burger = {
	// Select all is going to pull the selectAll function from the ORM.js file and will push the results to the handlebars html.
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	// Select all is going to pull the insertOne function from the ORM.js file and will push the results to the handlebars html.
	insertOne: function(cols, vals, cb){
		orm.insertOne("burgers", cols, vals, cb, function(res){
			cb(res);
		});
	},
	// Select all is going to pull the updateOne function from the ORM.js file and will push the results to the handlebars html.
	updateOne: function(colVals, condition, cb){
		orm.updateOne("burgers", colVals, condition, function(res){
			cb(res);
		});
	}
};

// Exporting functions for burgers_controller.js.
module.exports = burger;