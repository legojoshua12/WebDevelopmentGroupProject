const router = require('express').Router();
let Cases = require('../models/casesModel');

router.get('/', (req, res) => {
    const data = {
        date: '10-10-20',
        county: 'San Clara',
        state: 'California',
        cases: '1947',
        deaths: '1'
    };

    Cases.find()
        .then((data) => {
            console.log('Data: ', data);
        })
        .catch((error) => {
            console.log('Error: ', error)
        });
    res.json(data);
});

module.exports = router;