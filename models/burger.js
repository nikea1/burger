var orm = require("../config/orm.js");

var burger = {
	selectAllBurgers: function(callback){
		orm.selectAll('burger', function(res){
			callback(res);
		});
	}

	insertBurger: function(value, callback){
		orm.insertOne('burger', 'burger_name', value, function(res){
			callback(res);
		})
	}

	updateBurger: function(column, value, id){
		var condition = "id = "+id;
		orm.updateOne('burger', column, value, condition, function(res){
			callback(res);
		})
	}
}