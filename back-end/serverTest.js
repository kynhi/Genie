

app.get('/', (req, res) => {
  res.send('we own');
});

app.get('/test', (req, res) => {
  var test = {
    id: 123,
    user: 'willima',
    password:'hello'
  }
  res.send({test});
});

app.listen(8080, ()=>{ //launches server
  console.log('App is listening on port 8080');
});
