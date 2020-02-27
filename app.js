var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require('mongoose');
const siteViews = require('./models/visits');
var mongo = require('mongodb');


const url = 'mongodb://localhost:27017/confusion';
// const connect = mongoose.connect(url);
// var ourDB;

 var SiteViewsUp = require('./src/visitsUp');

// connect.then((db)=>{
//   console.log('connected succesfully to the server');
//   ourDB = db;

// })
// .catch((err)=>{console.log(err)});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.get('/', function(req, res, next) {

  mongo.connect(url , (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('confusion');
    let coll = db.collection('visits');

    console.log(db);
    SiteViewsUp.siteViewsUp(db, 'visits', 'home');
    console.log(2);
    db.collection('visits').findOne({page: 'home'}).then((data)=>{
      console.log(data);
      res.render('index',{counter: data.counter});
      }, (err)=>{next(err)})
      .catch((err)=>{next(err)})
    

  })
 
});


app.get('/about', function(req, res, next) {

  mongo.connect(url , (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('confusion');
    let coll = db.collection('visits');

    console.log(db);
    SiteViewsUp.siteViewsUp(db, 'visits', 'about');
    console.log(2);
    db.collection('visits').findOne({page: 'about'}).then((data)=>{
      console.log(data);
      res.render('about',{counter: data.counter});
      }, (err)=>{next(err)})
      .catch((err)=>{next(err)})
    

  })
 
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
