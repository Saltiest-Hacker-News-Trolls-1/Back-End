const models = require("../../../../database/models");

const UserServices = require('./services');

module.exports = UserServices(models.User);
