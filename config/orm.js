var connection = require("./connection.js");

var orm ={
	selectAll:function(table, callback){
		connection.query("SELECT * FROM "+table, function(err, rows){
			if (err) throw err;

			console.log(rows);
			callback(rows);
		})
	},

	insertOne: function(table, column, item, callback){
		connection.query("INSERT INTO "+table+"("+column+") VALUES (?)", [item], function(err, results){
			if (err) throw err;

			console.log(results);
			callback(results);
		})
	},

	updateOne: function(table, column, value ,condition, callback){
		connection.query("UPDATE "+table+" SET "+column+" = "+value+" WHERE "+condition, function(err, results){
			if (err) throw err;

			console.log(results);
			callback(results);
		})
	}
}

module.exports = orm;