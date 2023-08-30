const potato = require("../models/PotatoModel");
const catchAsync = require('../utils/catchAsync');

exports.getAllPotatoes = catchAsync(async (req, res, next) => {
    let potatoes = await potato.aggregate([
        {
            $match: { }
        },
        {
            $addFields: {
                images: {
                    $map: {
                        input: '$images',
                        as: 'image',
                        in: {
                            $concat: ['http://localhost:3000/api/v1.0/picture?pictureLocation=','$$image']
                        }
                    }
                }
            }
        },
        {
            $limit: 100
        }
    ])

    await res.status(200).json({
        status: 'success',
        results: potatoes.length,
        data: {
            potatoes
        }
    });
});

