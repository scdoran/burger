// Import the ORM to interact with the database.
var orm =require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	insertOne: function(cols, vals, cb){
		orm.insertOne("burgers", cols, vals, cb, function(res){
			cb(res);
		});
	},
	updateOne: function(colVals, condition, cb){
		orm.updateOne("burgers", colVals, condition, function(res){
			cb(res);
		});
	}
};

// Exporting functions for burgers_controller.js.
module.exports = burgers;