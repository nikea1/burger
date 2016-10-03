var orm = require("../config/orm.js");

var burger = {
	selectAllBurgers: function(callback){
		orm.selectAll('burgers', function(res){
			callback(res);
		});
	},

	insertBurger: function(value, callback){
		orm.insertOne('burgers', 'burger_name', value, function(res){
			callback(res);
		})
	},

	updateBurger: function(value, condition, callback){
		
		orm.updateOne('burgers', value, condition, function(res){
			callback(res);
		})
	}
}

module.exports = burger;