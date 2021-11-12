let mongoose = require('mongoose');
// create a model class
let Movie = mongoose.Schema({
    Title: String,
    Description: String,
    Director: String,
    Genre: String,
    Year: String,
    ImdbRating: String,
    MetaScroe: String,
    GrossIncome: String,
    Rated: String,
    Duration: String,
    Stars: String
},
{
  collection: "movies"
});

module.exports = mongoose.model('Movie', Movie);
