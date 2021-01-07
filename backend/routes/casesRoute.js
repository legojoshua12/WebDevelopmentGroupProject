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

router.route('/add').post((req, res) => {
    const date = req.body.date;
    const county = req.body.county;
    const state = req.body.state;
    const cases = req.body.cases;
    const deaths = req.body.deaths;
  
    const newCase = new Cases({
      date,
      county,
      state,
      cases,
      deaths,
    });
  
    newCase.save()
    .then(() => res.json('Case added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/update/:id').post((req, res) => {
    Cases.findById(req.params.id)
      .then(cases => {
        cases.date = req.body.date;
        cases.county = req.body.county;
        cases.state = req.body.state;
        cases.cases = req.body.cases;
        cases.deaths = req.body.deaths;
  
        cases.save()
          .then(() => res.json('Cases updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deletecase/:id').delete((req, res) => {
    Cases.findByIdAndDelete(req.params.id)
      .then(() => res.json('Case deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getcase/:id').post((req, res) => {
    Cases.findById(req.params.id)
    .then(cases => res.json(cases))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;