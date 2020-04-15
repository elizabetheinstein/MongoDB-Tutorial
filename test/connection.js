const mongoose = require('mongoose')

before(() => {
    try {
        mongoose.connect('mongodb://localhost/test', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        mongoose.connection.once('open', () => console.log('Connection has been made.'))
            .on('error', (error) => console.log('Connection error:', error))
    } catch (error) {
        console.log(error)
    }
})