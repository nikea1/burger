var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){

	//console.log("Halp");
	res.redirect("/burger");
})

router.get("/burger", function(req, res){
	
	burger.selectAllBurgers(function(data){
		
		res.render('index', {burgers:data});
	
	})
})

router.put("/burger/update/:id", function(req, res){
	
	var condition = "id = "+req.params.id;
	burger.updateBurger(req.body.devoured, condition, function(){
		res.redirect("/")
	})
})



module.exports = router;