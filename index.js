require('dotenv').config()

const app = require('./src/app');

// const Sequelize = require('sequelize');

// const devDB = process.env.DEV_DATABASE_URL;

// const prodDB = process.env.PROD_DATABASE_URL

// const db = () => {
//     if (process.env.NODE_ENV === 'production') {
//         return prodDB;
//     }
//     return devDB;
// };

const port = () => {
    return process.env.PORT || 3003;
};

// const sequelize = new Sequelize(db());

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log(`Connection has been established successfully to ${db()}.`);
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });


app.listen(port(), () =>
    console.log(`listening on http://localhost:${port()}`)
);