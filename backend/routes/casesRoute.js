const router = require('express').Router();
let Cases = require('../models/casesModel');

router.route('/').get((req, res) => {
    Cases.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error)
        });
});

module.exports = router;