// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const movies = require('../models/movies');

// define the movie model
let movie = require('../models/movies');

/* GET movies List page. READ */
router.get('/', (req, res, next) => {
  // find all movies in the books collection
  book.find( (err, movies) => {
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

//  GET the Movie Details page in order to add a new Movie
router.get('/add', (req, res, next) => {

  res.render('movies/details', { title: 'Add Movie', page: 'movies/details', books: ''  });

    /*****************
     * ADD CODE HERE *
     *****************/

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let newItem = new movies({
      "Title": req.body.title,
      "Description": req.body.description,
      "Price": req.body.price,
      "Author": req.body.author,
      "Genre": req.body.genre,
  });

  books.create(newItem, (err) => {
      if (err) {
          console.error(err);
          res.end(err);
      };
      res.redirect('/books');
  })

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    let id = req.params.id;
    if (id != 'favicon.ico')
      movies.findById(id, {}, {}, (err, movieToEdit) => {
            if (err) {
                console.error(err);
                res.end(err);
            };
            if (movieToEdit !== undefined) {
                console.log("Edit Books", bookItemToEdit);
                res.render('movies/details', { title: "Edit Movie", page: "movies/details", movies: movieToEdit })
            }
        })

});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let id = req.params.id;
    let updatedItem = new movies({
        "_id": id,
        "Title": req.body.title,
        "Description": req.body.description,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre
    });

    books.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.redirect('/movies');
         res.end(err);
        }

        res.redirect('/movies');
    })
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let id = req.params.id;

    books.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/books');
    })
});


module.exports = router;
