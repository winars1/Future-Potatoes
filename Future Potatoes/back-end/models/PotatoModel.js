const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const potatoSchema =  new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'There must be a valid name'],
        },
        price: {
            type: Number,
            required: [true, 'A accommodation must have a price']
        },
        description: {
            type: [String],
            trim: true
        },
        images: [String],
        createdAt: {
            type: Date,
            default: Date.now(),
            select: false
        }
    });

const Potato = mongoose.model('Potato', potatoSchema);
module.exports = Potato;

