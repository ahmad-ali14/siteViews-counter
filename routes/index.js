var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const siteViews = require('../models/visits');
var SiteViewsUp = require('../src/visitsUp');

/* GET home page. */
router.get('/', function(req, res, next) {
  SiteViewsUp.siteViewsUp();
   siteViews.findById('5e0df423ca927acbac7999d8').then((data)=>{
    res.render('index',{counter: data.counter});
    }, (err)=>{next(err)})
    .catch((err)=>{next(err)})
  
});

module.exports = router;
