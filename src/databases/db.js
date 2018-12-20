const mongoose = require('mongoose');

const { database } = require('../databases/keys');

mongoose.connect(database.URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}).then(db => console.log('La base de datos está conectada')).catch(error => console.log(error));
