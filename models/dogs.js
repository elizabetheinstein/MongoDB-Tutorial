const mongoose = require('mongoose');
const schema = mongoose.Schema;

const DogSchema = new Schema({
    name: String,
    breed: String,
    age: Number
});

const DogModel = mongoose.model('dogs', DogSchema);

module.exports = DogModel;