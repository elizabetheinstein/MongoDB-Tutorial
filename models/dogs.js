const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: String,
    breed: String,
    age: Number
});

const Dog = mongoose.model('dog', DogSchema)

module.exports = Dog