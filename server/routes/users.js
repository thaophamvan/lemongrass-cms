var express = require('express');
var router = express.Router();
var dbUtils = require('../lib/db')

router.get('/', (req, res) => {
  var db = dbUtils.get()

  db.search().then(users => {
    res.render('users', {
      users: users
    })
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

module.exports = router
