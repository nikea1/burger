var burger = require("../modules/burger.js");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
	burger.selectAllBurgers(function(data){
		res.render("index", {burgers : data});
	})
})