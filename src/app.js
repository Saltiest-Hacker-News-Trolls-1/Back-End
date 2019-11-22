const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

// various middleware
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// user made imports
const { register, login, changePassword, deleteAccount } = require('./libs/users/controllers')
const { getHackers, getMeanestHackers } = require('./libs/hackers/controllers')
const { ensureAuthenticated } = require('./libs/users/middleware')

// routes 
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
app.get('/', function (req, res) {
  return res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});
app.post('/user/register', register);
app.post('/user/login', login)
app.put('/user/changePass', ensureAuthenticated, changePassword)
app.delete('/user/deleteAccount', ensureAuthenticated, deleteAccount)
app.get('/hackers/getMean', ensureAuthenticated, getMeanestHackers)
app.get('/hackers/getBusy', ensureAuthenticated, getHackers)
app.get('/*', function (req, res) {
  return res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});

// error handling
app.use((err, req, res, next) => {
  res.status(err.httpStatusCode || 500).json({
    msg: err.message,
  });
});

module.exports = app;