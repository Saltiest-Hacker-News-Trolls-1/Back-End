require('dotenv').config()

const app = require('./src/app');

const port = () => {
    return process.env.PORT || 3003;
};

app.listen(port(), () =>
    console.log(`listening on http://localhost:${port()}`)
);