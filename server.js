const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const routes = require('./server/config/routes')(app);

const port = 8000;

app.listen(port);
console.log(`server is listening on port ${port}`)
