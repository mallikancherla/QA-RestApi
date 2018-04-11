'use strict';

var express = require("express");
var router = express.Router();


router.get("/", function(req, res){
	res.json({response: "You sent me a GET request"});
});


router.post("/", function(req, res){
	res.json({
		response: "You sent me a POST request",
		body: req.body
	});
});


router.get("/:qID", function(req, res){
	res.json({
		response: "You sent me a GET request for ID " + req.params.qID
	});
});


router.post("/:qID/answers", function(req, res){
	res.json({
		response: "You sent me a POST request to /answers",
		questionId: req.params.qID,
		body: req.body
	});
});


router.put("/:qID/answers/:aID", function(req, res){
	res.json({
		response: "You sent me a PUT request to /answers",
		questionId: req.params.qID,
		answerId: req.params.aID,
		body: req.body
	});
});

router.delete("/:qID/answers/:aID", function(req, res){
	res.json({
		response: "You sent me a DELETE request to /answers",
		questionId: req.params.qID,
		answerId: req.params.aID
	});
});


router.post("/:qID/answers/:aID/vote-:dir", function(req, res, next){
		if(req.params.dir.search(/^(up|down)$/) === -1) {
			var err = new Error("Not Found");
			err.status = 404;
			next(err);
		} else {
			next();
		}
	}, function(req, res){
	res.json({
		response: "You sent me a POST request to /vote-" + req.params.dir,
		questionId: req.params.qID,
		answerId: req.params.aID,
		vote: req.params.dir
	});
});

module.exports = router;

