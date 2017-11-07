const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
//const css = require('./style.css');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', (req, res) => {
  res.sendFile('/Users/courtney/Desktop/twitter-js/public/stylesheets/style.css')
})

module.exports = router;
