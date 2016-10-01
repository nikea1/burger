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

	updateBurger: function(column, value, id){
		var condition = "id = "+id;
		orm.updateOne('burgers', column, value, condition, function(res){
			callback(res);
		})
	}
}

module.exports = burger;