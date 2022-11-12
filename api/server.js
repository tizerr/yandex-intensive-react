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
        return {id: item.id, name: item.name, books: item.books.map(book => book.id)}
    });
    res.send(genres)
})

app.get('/api/categories/:id', (req,res) => {
    const genre = DB.find(item => item.id === req.params.id)
    res.send(genre.books.map((b) => ({id: b.id, name: b.name, price: b.price, authors: b.authors,
        mark: b.mark, subgenre: b.subgenre, annotation: b.annotation, reviews: b.reviews.map((r) => r.id)})))
})

app.get('/api/books/:id', (req,res) => {
    let toBreak = false;
    let book;
    for (const genre of DB){
        for (const bk of genre.books) {
            if (bk.id === req.params.id) {
                book = bk;
                toBreak = true;
                break;
            }
        }
        if (toBreak) break;
    }
    res.send([book])
})

app.get('/api/books/:id/reviews', (req,res) => {
    let toBreak = false;
    let book;
    for (const genre of DB){
        for (const bk of genre.books) {
            if (bk.id === req.params.id) {
                book = bk;
                toBreak = true;
                break;
            }
        }
        if (toBreak) break;
    }
    res.send(book.reviews)
})

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
