const cloudantDb = require('./cloudant-db')

const state = {
  db: {
    drink_type: null,
    drink_temperature: null,
  }
}

exports.connect = done => {
  // load cloudant config
  let cloudantCredentials = null
  try {
    cloudantCredentials = require('../../config/cloudant-config.json')
    console.log('Loaded cloudant config', cloudantCredentials)
  } catch (e) {
    console.error(e)
  }

  let dbNames = Object.keys(state.db)

  dbNames.forEach(dbName => state.db[dbName] = cloudantDb(dbName, cloudantCredentials))

  let dbInits = Object.values(state.db).map(dbInstance => dbInstance.init())

  Promise.all(dbInits).then(() => done())
}

exports.get = (dbName) => state.db[dbName]
