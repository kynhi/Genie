require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');

const app = express();

const port = process.env.PORT;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('we own');
});

app.listen(port, ()=>{
  console.log(`app is listening on port ${port}`);
});
