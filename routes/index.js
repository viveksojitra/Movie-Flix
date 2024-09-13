// routes/index.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieControllers');
const upload = require('../config/multerConfig');

// Routes
router.get('/', movieController.getHomePage);

// Add this route for rendering the Add Movie form
router.get('/add', (req, res) => {
    res.render('addMovie'); // Assuming your view file is named addMovie.ejs
});

router.post('/add', upload.single('poster'), movieController.addMovie);
router.get('/edit/:id', movieController.getEditMoviePage);
router.post('/edit/:id', upload.single('poster'), movieController.updateMovie);
router.get('/delete/:id', movieController.deleteMovie);

module.exports = router;
