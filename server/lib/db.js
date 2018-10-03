var state = {
  db: null
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

  state.db = require('./cloudant-db')(cloudantCredentials)

  done(state.db)
}

exports.get = () => state.db
