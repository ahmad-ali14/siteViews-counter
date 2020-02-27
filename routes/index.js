var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const siteViews = require('../models/visits');
var SiteViewsUp = require('../src/visitsUp');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(1);
  SiteViewsUp.siteViewsUp('home');
  console.log(2);
  siteViews.findOne({page: 'home'}).then((data)=>{
    res.render('index',{counter: data.counter});
    }, (err)=>{next(err)})
    .catch((err)=>{next(err)})
  
});

router.get('about', function(req, res, next) {
  SiteViewsUp.siteViewsUp('about');
 siteViews.findOne({page: 'about'}).then((data)=>{
    res.render('index',{counter: data.counter});
    }, (err)=>{next(err)})
    .catch((err)=>{next(err)})
  
});

module.exports = router;
