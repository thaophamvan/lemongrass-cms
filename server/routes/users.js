const express = require('express');
const router = express.Router();
const dbUtils = require('../lib/db')

router.get('/', (req, res) => {
  let db = dbUtils.get('users')

  db.search().then(users => {
    res.render('users', {
      users: users
    })
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.get('/new', (req, res) => {
  res.render('users/new')
})

router.post('/new', (req, res) => {
  let db = dbUtils.get('users')

  let user = {
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
  let db = dbUtils.get('users')

  db.delete(req.params.id).then(todo => {
    res.redirect('/users')
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.get('/:id/edit', (req, res) => {
  let db = dbUtils.get('users')

  db.read(req.params.id).then(user => {
    res.render('users/edit', user);
  }).catch(err => {
    res.status(500).send({ error: err });
  });
})

router.post('/:id/edit', (req, res) => {
  let db = dbUtils.get('users')

  let user = {
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
