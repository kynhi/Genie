require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const {Event} = require('./models/event');

const app = express();

const port = process.env.PORT;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('we own');
});

app.post('/event', (req, res) => {
  let event = new Event({
    name: req.body.name
  });
  event.save().then((doc) => {
    res.send(doc);
  }).catch((e) =>{
    res.status(400).send(e);
  });
});

app.get('/event', (req, res) => {
  Event.find().then((events) => {
    res.send({events});
  }).catch((e) =>{
    res.status(400).send();
  });
});



app.listen(port, ()=>{
  console.log(`app is listening on port ${port}`);
});
