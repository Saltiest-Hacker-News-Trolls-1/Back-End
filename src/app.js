const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { register, login } = require('./libs/users/controllers')

app.post('/user/register', register);
app.post('/user/login', login)

// error handling
app.use((err, req, res, next) => {
    if (err.name) {
        res.status(400).json({
            message: `${err.message}!`,
            stack: err.stack
        });
    }
});

module.exports = app;