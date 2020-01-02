const exppress = require('express');

const mongoose = require('mongoose');

const siteViews = require('../models/visits');


siteViewsUp = function ( ) {
    siteViews.findByIdAndUpdate('5e0df423ca927acbac7999d8', {$inc: {counter: 1}}, {new:true})
    .then((data)=>{console.log(data.counter)})
    .catch((err)=>{console.log(err)});
}

module.exports = {siteViewsUp};