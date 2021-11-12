// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/movies');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('movies/', {
    title: 'Home',
    movies: ''
   });
});

/* GET home page. wildcard */
router.get('*/*/error', (req, res, next) => {
  res.render('error', {
    title: "An error happend! :(",
    message: 'Error',
    error:{
      status: "404",
      stack: 'error statck'
    }
   });
});

module.exports = router;
