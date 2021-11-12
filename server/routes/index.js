// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let movie = require('../models/movies');

/* GET home page. wildcard */
/* GET movies List page. READ */
router.get('/', (req, res, next) => {
  // find all movies in the movies collection
  movie.find( (err, movies) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('movies/index', {
        title: 'Movies',
        movies: movies
      });
    }
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
