var cloudantDb = require('./cloudant-db')

var state = {
  db: {
    users: null,
    drinkType: null
  }
}

exports.connect = done => {
  // load cloudant config
  let cloudantCredentials = null
  try {
    cloudantCredentials = require('../../config/cloudant-config.json');
    console.log("Loaded cloudant config", cloudantCredentials);
  } catch (e) {
    console.error(e);
  }

  state.db.users = cloudantDb('users', cloudantCredentials)
  state.db.drinkType = cloudantDb('drink_type', cloudantCredentials)

  state.db.users.init().then(() =>
    state.db.drinkType.init().then(() => done())
  )
}

exports.get = (dbName) => state.db[dbName]
