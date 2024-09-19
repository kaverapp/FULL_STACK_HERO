var express = require('express');
var router = express.Router();

let database=require("./users");

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.status(200).json("hello react")
});

module.exports = router;
