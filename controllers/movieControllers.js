const Movie = require('../models/movieModel');
const fs = require('fs');
const path = require('path');

// Render the home page with the list of movies
exports.getHomePage = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render('index', { movies });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

// Handle adding a new movie with poster upload
exports.addMovie = async (req, res) => {
  try {
    const { title, description, releaseDate, genre, rating } = req.body;
    const posterPath = req.file ? `uploads/${req.file.filename}` : null;

    const newMovie = new Movie({
      title,
      description,
      releaseDate,
      genre,
      rating,
      poster: posterPath
    });

    await newMovie.save();
    res.redirect('/');
  } catch (error) {
    console.error('Error adding movie:', error);
  }
};

// controllers/movieControllers.js
exports.getEditMoviePage = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render('editMovie', { movie });  // Update the view name to 'editMovie'
  } catch (error) {
    console.error('Error fetching movie:', error);
  }
};


// Handle updating movie details, including updating the poster
exports.updateMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const { title, description, releaseDate, genre, rating } = req.body;

    const movie = await Movie.findById(movieId);

    // If a new poster is uploaded, delete the old one and update the poster path
    if (req.file) {
      if (movie.poster) {
        fs.unlink(path.join(__dirname, '..', movie.poster), (err) => {
          if (err) console.error('Failed to delete old poster:', err);
        });
      }
      movie.poster = `uploads/${req.file.filename}`;
    }

    // Update other movie details
    movie.title = title;
    movie.description = description;
    movie.releaseDate = releaseDate;
    movie.genre = genre;
    movie.rating = rating;

    await movie.save();
    res.redirect('/');
  } catch (error) {
    console.error('Error updating movie:', error);
  }
};

// Handle deleting a movie and its poster
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    // Delete the poster file from storage
    if (movie.poster) {
      fs.unlink(path.join(__dirname, '..', movie.poster), (err) => {
        if (err) console.error('Error deleting poster:', err);
      });
    }

    // Delete the movie record from the database
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (error) {
    console.error('Error deleting movie:', error);
  }
};
