let mongoose = require('mongoose');
// {
//   "_id": {
//       "$oid": "618dc74509cb7e9aa00704c4"
//   },
//   "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
//   "Director": "Frank Darabont",
//   "Genre": "Drama",//
//   "Title": "The Shawshank Redemption",//
//   "Year": "1994",//
//   "ImdbRating": "9.4",//
//   "MetaScore": "90",//
//   "GrossIncome": "1234.8M",//
//   "Rated": "R",//
//   "Duration": "125",//
//   "Stars": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler"//
// }
// create a model class
let Movie = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
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
