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

module.exports = router
