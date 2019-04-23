var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", {
            burgers: data});
    });
});

router.delete("/api/delete/:delete", function(req, res) {
    burger.updateOne(req.params.delete, function(data) {
        res.send(data);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(data) {
        res.send(data);
    });
});

module.exports = router;