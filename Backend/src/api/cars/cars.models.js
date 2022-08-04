const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    car: { type: String, },
    model: { type: String, unique: true,required: true },
    price: { type: Number},
    gas: {type: String, enum: ['Gasolina','Diesel']},
    power: {type: Number},
    imagesCars: [{ type: Schema.Types.ObjectId, ref: "imagesCar", required: true}],
});

module.exports = mongoose.model('cars', schema);