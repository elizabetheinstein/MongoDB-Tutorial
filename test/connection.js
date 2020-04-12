const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

mongoose.connection.once('open', () => console.log('Connection has been made.'))
  .on('error', (error) => console.log('Connection error:', error))