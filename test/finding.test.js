const mongoose = require('mongoose')
const chai = require('chai')
const expect = chai.expect
const Dog = require('../models/dogs')

describe('Finding Records', () => {
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
    it('find a record in the database', async () => {
        const foundDog = await Dog.findOne({ name: 'Kiko' })
        expect(foundDog.name).to.equal('Kiko')
        expect(foundDog.breed).to.equal('Pomsky')
    })

    it('find a record in the database by ID', async () => {
        const foundDog = await Dog.findOne({_id: newDog._id})
        expect(foundDog.name).to.equal('Kiko')
        expect(foundDog.breed).to.equal('Pomsky')
    })
})