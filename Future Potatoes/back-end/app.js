let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const cors = require('cors');

let apiRouter = require('./routes/api');
let accommodationsRouter = require('./routes/accommodations');

let app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

app.use('/api', apiRouter);

app.use('/Potatoes', accommodationsRouter);

module.exports = app;
// http://localhost:3000/Accommodations/CoverPictures?imageId=