require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const {Event} = require('./models/event');
const {User} = require('./models/user');
const _ = require('lodash');

const app = express();

const port = process.env.PORT;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


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

app.post('/event/:eid/:uid', (req, res) => {
  var eventid = req.params.eid;
  var userid = req.params.uid;

  User.findById(userid).then((_user) =>{
    Event.findById(eventid).then((_event) => {
      _event.users.push(_user);
      _event.save().then((__event) => {
        res.send(__event);
      });
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.post('/user', (req, res) => {
  let user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save().then((user) =>{
    res.send(user);
  }).catch((e) => {
    res.status(400).send();
  });
});

app.post('/signin', (req, res) => {
  User.findOne({
    password: req.body.password,
    email: req.body.password
  }).then((user) =>{
    if(!user){
      return res.status(404).send({
        error: "User not found"
      });
    }
    res.send(user);
  }).catch((e) =>{
    res.status(404).send(e);
  });
})

app.get('/event', (req, res) => {
  Event.find().then((events) => {
    res.send({events});
  }).catch((e) =>{
    res.status(400).send();
  });
});

app.get('/event/:id', (req, res) => {
  Event.findById(req.params.id).then((_event) => {
    res.send( {_event} );
  }).catch((e) => {
    res.status(400).send();
  });
});

app.get('/user', (req, res) => {
  User.find().then((users) => {
    res.send( {users} );
  }).catch((e) => {
    res.status(400).send();
  });
});


app.get('/user/id/:id/', (req, res) => {
  User.findById(req.params.id).then((_user) => {
    res.send( {_user} );
  }).catch((e) => {
    res.status(400).send();
  });
});

app.get('/user/name/:name', (req, res) => {
  console.log("hello");
  User.findOne({'username':req.params.name}).then((_user) => {
    res.send( {_user} );
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/user/:id', (req, res) => {
  var id = req.params.id;
  var incPoint = req.body.points;

  User.findOneAndUpdate({_id :id}, {$inc: {'points' : incPoint}}, {new: true}).then((_user) =>{
    if(!_user){
      return res.status(404).send();
    }
    res.send({ _user });
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(port, ()=>{
  console.log(`app is listening on port ${port}`);
});
