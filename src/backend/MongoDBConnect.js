mongoose = require('mongoose');

const mongoUri = "mongodb://127.0.0.1:27017/CovidDatabase";
mongoose.connect(mongoUri,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify: false
})

const db = mongoose.connection;
db.on('error', function(err){
    console.log(err)
})

db.once('connected', function() {
    console.log('Connected successfully to: ' + mongoUri)
})

module.exports = db;