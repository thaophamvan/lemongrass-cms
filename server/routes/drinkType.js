const express = require('express')
const router = express.Router()
const dbUtils = require('../lib/db')

router.get('/', (req, res) => {
  let db = dbUtils.get('drink_type')

  db.search().then(drinkType => {
    res.render('drinkType', {
      drinkType: drinkType
    })
  }).catch(err => {
    res.status(500).send({ error: err })
  })
})

router.get('/new', (req, res) => {
  res.render('drinkType/new')
})

router.post('/new', (req, res) => {
  let db = dbUtils.get('drink_type')

  let drinkType = {
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    height: req.body.height,
    diameter: req.body.diameter,
    volume: req.body.volume,
  }

  db.create(drinkType).then(() => {
    res.redirect('/drink-type')
  }).catch(err => {
    res.status(500).send({ error: err })
  })
})

router.get('/:id/delete', (req, res) => {
  let db = dbUtils.get('drink_type')

  db.delete(req.params.id).then(() => {
    res.redirect('/drink-type')
  }).catch(err => {
    res.status(500).send({ error: err })
  })
})

router.get('/:id/edit', (req, res) => {
  let db = dbUtils.get('drink_type')

  db.read(req.params.id).then(drinkType => {
    res.render('drinkType/edit', drinkType)
  }).catch(err => {
    res.status(500).send({ error: err })
  })
})

router.post('/:id/edit', (req, res) => {
  let db = dbUtils.get('drink_type')

  let drinkType = {
    id: req.params.id,
    _rev: req.body._rev,
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    height: req.body.height,
    diameter: req.body.diameter,
    volume: req.body.volume,
  }

  db.update(drinkType.id, drinkType).then(() => {
    res.redirect('/drink-type')
  }).catch(err => {
    res.status(500).send({ error: err })
  })
})

module.exports = router
