const mongoose = require('mongoose')
const chai = require('chai')
const expect = chai.expect
const Dog = require('../models/dogs')

describe('Updating Records', () => {
    beforeEach(async () => {
        try {
            await mongoose.connection.collections.dogs.drop()
        } catch (error) {
            console.log(error)
        }
    })

    let newDog;

    beforeEach(async () => {
        newDog = new Dog({
            name: 'Kiko',
            breed: 'Pomsky',
            age: 1
        })
        await newDog.save()
    })
    it('update one record in the database', async () => {
        await Dog.updateOne({ name: 'Kiko' }, { name: 'Cake', breed: 'Husky Mix' })
        const updatedDog = await Dog.findOne({_id: newDog._id})
        expect(updatedDog.name).to.equal('Cake')
        expect(updatedDog.breed).to.equal('Husky Mix')
    })
    it('increments age by 1', async () => {
        await Dog.updateMany({}, { $inc: {age: 1} })
        const updatedDog = await Dog.findOne({name: 'Kiko'})
        expect(updatedDog.age).to.equal(2)
    })
})