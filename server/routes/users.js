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

router.get('/new', (req, res) => {
  res.render('users-new')
})

router.post('/new', (req, res) => {
  var db = dbUtils.get()

  var user = {
    name: req.body.name,
    description: req.body.description
  }

  db.create(user).then(user => {
    res.redirect('/users');
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.get('/:id/delete', (req, res) => {
  var db = dbUtils.get()

  db.delete(req.params.id).then(todo => {
    res.redirect('/users')
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.get('/:id/edit', (req, res) => {
  var db = dbUtils.get()

  db.read(req.params.id).then(user => {
    res.render('users-edit', user);
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.post('/:id/edit', (req, res) => {
  var db = dbUtils.get()

  var user = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    _rev: req.body._rev
  }

  db.update(user.id, user).then(todo => {
    res.redirect('/users')
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

module.exports = router
