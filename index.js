const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = require('./routes/index');
const db = require('./database/db');
const Movies = require('./models/movieModel');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, '/views')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', router);

const port = 3002;
app.listen(port, (err) => {
    if (!err) {
        console.log(`Server running on http://localhost:${port}`);
    } else {
        console.error('Error starting server:', err);
    }
});
