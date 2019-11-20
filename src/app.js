const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

// various middleware
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// user made imports
const { register, login } = require('./libs/users/controllers')
const {getHackers} = require('./libs/hackers/controllers')
const { ensureAuthenticated } = require('./libs/users/middleware')

// routes 
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
});
app.post('/user/register', register);
app.post('/user/login', login)
app.get('/hackers/get', ensureAuthenticated, getHackers)

// error handling
app.use((err, req, res, next) => {
    res.status(err.httpStatusCode || 500).json({
        msg: err.message,
      });
});

module.exports = app;