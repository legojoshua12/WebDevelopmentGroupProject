const mongoose = require('mongoose');

const CovidSchema = new mongoose.Schema({
    date:String,
    county:String,
    state:String,
    cases:String,
    deaths:String
})

mongoose.model("covid", CovidSchema);