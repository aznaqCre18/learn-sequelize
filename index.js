const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT_APP || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/', routes);

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
})