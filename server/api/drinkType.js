const express = require('express')

const router = express.Router()
const dbUtils = require('../lib/db')

router.get('/', (req, res) => {
  const db = dbUtils.get('drink_type')

  db.search().then((drinkType) => {
    res.send(drinkType)
  }).catch((err) => {
    res.status(500).send({ error: err })
  })
})

router.post('/', (req, res) => {
  const db = dbUtils.get('drink_type')

  const drinkType = {
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    height: req.body.height,
    diameter: req.body.diameter,
    volume: req.body.volume,
  }

  db.create(drinkType).then(drinkType => {
    res.send(drinkType)
  }).catch((err) => {
    res.status(500).send({ error: err })
  })
})

router.get('/:id', (req, res) => {
  const db = dbUtils.get('drink_type')

  db.read(req.params.id).then(drinkType => {
    res.send(drinkType);
  }).catch(err => {
    res.status(500).send({ error: err });
  });
});

router.put('/:id', (req, res) => {
  const db = dbUtils.get('drink_type')

  db.update(req.params.id, req.body).then(drinkType => {
    res.send(drinkType);
  }).catch(err => {
    res.status(500).send({ error: err });
  });
});

router.delete('/:id', (req, res) => {
  const db = dbUtils.get('drink_type')

  db.delete(req.params.id).then(drinkType => {
    res.send(drinkType);
  }).catch(err => {
    res.status(500).send({ error: err });
  });
});

module.exports = router
