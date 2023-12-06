const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pagarmaheshofficial:bFbwucdf3Iw6pjKO@cluster0.qscx5l3.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})