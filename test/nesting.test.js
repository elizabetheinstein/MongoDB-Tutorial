const mongoose = require('mongoose')
const chai = require('chai')
const expect = chai.expect
const Person = require('../models/people')

describe('Nesting Records', () => {

    beforeEach(async () => {
        await mongoose.connection.collections.people.drop()
    });

    it('creates a person with sub-documents', async () => {
        let person = new Person({
            name: 'Liz',
            pets: [{name: 'Kiko', species: 'dog'}]
        })
        await person.save()

        const newPerson = await Person.findOne({name: 'Liz'})
        expect(newPerson.name).to.equal('Liz')
        expect(newPerson.pets).to.be.an('array')
        expect(newPerson.pets).to.have.lengthOf(1)
    })

    it('adds a pet to person', async () => {
        let person = new Person({
            name: 'Liz',
            pets: [{name: 'Kiko', species: 'dog'}]
        })
        await person.save()

        await Person.updateOne({ name: 'Liz' }, { $push: { pets: { name: 'Lucy', species: 'dog' } } })

        const check = await Person.findOne({ name: 'Liz' })
        expect(check.pets).to.be.an('array')
        expect(check.pets).to.have.lengthOf(2)
    })
})