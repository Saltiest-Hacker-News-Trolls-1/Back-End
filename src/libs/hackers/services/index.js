const db = require('../../../../database/models')

const HackerServices = require('./services');

module.exports = HackerServices(db);
