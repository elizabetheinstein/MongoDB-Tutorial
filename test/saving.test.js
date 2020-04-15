const mongoose = require('mongoose')
const chai = require('chai')
const expect = chai.expect
const Dog = require('../models/dogs')

describe('Saving Records', () => {
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

    it('save a record to the database', async () => {
        const savedDog = await Dog.findOne({name: 'Kiko'})
        expect(savedDog.name).to.equal('Kiko')
        expect(savedDog.breed).to.equal('Pomsky')
    })
})