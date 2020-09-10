const router = require("express").Router();
var Books = require("../Models/books");
const { Router } = require("express");

router.get("/api/books", function (req, res) {
  Books.find({})
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

router.post("/api/books", function (req, res) {
  Books.create(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});

router.delete("/api/books/:id");

module.exports = router;
