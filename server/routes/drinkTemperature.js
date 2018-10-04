const express = require('express');
const router = express.Router();
const dbUtils = require('../lib/db')

router.get('/', (req, res) => {
  let db = dbUtils.get('drink_temperature')

  db.search().then(drinkTemperature => {
    res.render('drinkTemperature', {
      drinkTemperature: drinkTemperature
    })
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.get('/new', (req, res) => {
  res.render('drinkTemperature/new')
})

router.post('/new', (req, res) => {
  let db = dbUtils.get('drink_temperature')

  let drinkTemperature = {
    name: req.body.name,
    description: req.body.description,
    desired_temperature: req.body.desired_temperature,
  }

  db.create(drinkTemperature).then(drinkTemperature => {
    res.redirect('/drink-temperature');
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.get('/:id/delete', (req, res) => {
  let db = dbUtils.get('drink_temperature')

  db.delete(req.params.id).then(todo => {
    res.redirect('/drink-temperature')
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.get('/:id/edit', (req, res) => {
  let db = dbUtils.get('drink_temperature')

  db.read(req.params.id).then(drinkTemperature => {
    res.render('drinkTemperature/edit', drinkTemperature);
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.post('/:id/edit', (req, res) => {
  let db = dbUtils.get('drink_temperature')

  let drinkTemperature = {
    id: req.params.id,
    _rev: req.body._rev,
    name: req.body.name,
    description: req.body.description,
    desired_temperature: req.body.desired_temperature,
  }

  db.update(drinkTemperature.id, drinkTemperature).then(todo => {
    res.redirect('/drink-temperature')
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

module.exports = router
