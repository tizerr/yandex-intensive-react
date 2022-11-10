const express = require('express');
const DB = require('./database');
const port = 3001;

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/test', (req,res) => {
    res.send('Everything is OK!')
})

app.get('/api/full-data', (req,res) => {
    res.send(DB)
})

app.get('/api/categories', (req,res) => {
    const genres = DB.map(item => {
        return {id: item.id, name: item.name}
    })
    res.send(genres)
})

app.get('/api/categories/:id', (req,res) => {
    const genre = DB.find(item => item.id === req.params.id)
    res.send(genre)
})

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
