const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    species: String,
    age: Number
}) 

const PersonSchema = new Schema({
    name: String,
    age: Number,
    pets: [PetSchema]
});

module.exports = mongoose.model('Person', PersonSchema)
