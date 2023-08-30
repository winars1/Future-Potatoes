const express = require('express');
const apiController = require("../controllers/apiController")
const catchAsync = require('../utils/catchAsync');

const router = express.Router();

router.get('/v1.0/picture', apiController.getPicture);

module.exports = router;
