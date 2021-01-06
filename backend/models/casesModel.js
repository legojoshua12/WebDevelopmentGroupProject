const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CasesSchema = new Schema({
    date: String,
    county: String,
    state: String,
    cases: String,
    deaths: String,
});

// Model
const Case = mongoose.model('Case', CasesSchema);

module.exports = Case;