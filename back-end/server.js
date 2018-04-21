require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const {Event} = require('./models/event');
const {User} = require('./models/user');

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

app.post('/user', (req, res) => {
  let user = new User({
    username: req.body.username,
    password: req.body.password
  });
  user.save().then((user) =>{
    res.send(user);
  }).catch((e) => {
    res.status(400).send();
  })

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
