const express = require('express')

const router = express.Router()
const dbUtils = require('../lib/db')

router.get('/', (req, res) => {
  const db = dbUtils.get('drink_temperature')

  db.search().then((drinkTemperature) => {
    res.send(drinkTemperature)
  }).catch((err) => {
    res.status(500).send({ error: err })
  })
})

router.post('/', (req, res) => {
  const db = dbUtils.get('drink_temperature')

  const drinkTemperature = {
    name: req.body.name,
    description: req.body.description,
    desired_temperature: req.body.desired_temperature,
  }

  db.create(drinkTemperature).then(drinkTemperature => {
    res.send(drinkTemperature)
  }).catch((err) => {
    res.status(500).send({ error: err })
  })
})

router.get('/:id', (req, res) => {
  const db = dbUtils.get('drink_temperature')

  db.read(req.params.id).then(drinkTemperature => {
    res.send(drinkTemperature);
  }).catch(err => {
    res.status(500).send({ error: err });
  });
});

router.put('/:id', (req, res) => {
  const db = dbUtils.get('drink_temperature')

  db.update(req.params.id, req.body).then(drinkTemperature => {
    res.send(drinkTemperature);
  }).catch(err => {
    res.status(500).send({ error: err });
  });
});

router.delete('/:id', (req, res) => {
  const db = dbUtils.get('drink_temperature')

  db.delete(req.params.id).then(drinkTemperature => {
    res.send(drinkTemperature);
  }).catch(err => {
    res.status(500).send({ error: err });
  });
});

module.exports = router
