const catchAsync = require('../utils/catchAsync');
const path = require('path');


exports.getPicture = catchAsync(async (req, res, next) => {

    console.log(req.query.pictureLocation)
    await res.sendFile(path.resolve(req.query.pictureLocation))

});