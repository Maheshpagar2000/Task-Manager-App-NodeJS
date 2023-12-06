const mongoose = require('mongoose');

mongoose.connect("URL of the mongoDB database here", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})