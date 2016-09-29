var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "burger_db"
})

connection.connect(function(err){
	if(err) {
		console.log("Error connection: "+err.stack)
		return;
	}

	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;