const mongoose = require('mongoose')
const chai = require('chai')
const expect = chai.expect
const Dog = require('../models/dogs')

describe('Deleting Records', () => {
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
            breed: 'Pomsky'
        })
        await newDog.save()
    })
    it('deletes one record in the database', async () => {
        await Dog.deleteOne({ name: 'Kiko' })
        const deletedDog = Dog.findOne({ name: 'Kiko' })

        expect(deletedDog.name).to.equal(undefined)
        expect(deletedDog.breed).to.equal(undefined)
    })
})