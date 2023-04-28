const express = require('express');

const user = require('./routes/user.routes');
const db = require('./db/connect');


const app = express();

app.use(express.json());

db();

app.use(user);

app.listen(4000, () => {
    console.log('Express is started ...');
})