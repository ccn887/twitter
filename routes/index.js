const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
//const css = require('./style.css');
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/stylesheets/style.css', (req, res) => {
  res.sendFile('/Users/courtney/Desktop/twitter-js/public/stylesheets/style.css')
})
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  let tweets = tweetBank.list();
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, name: name, showForm: true} );
});
router.get('/tweets/:id', function(req, res) {
  var id = req.params.id
  let tweets = tweetBank.list();
  var list = tweetBank.find( {id: id} );
  res.render( 'index', {tweets: list} )
});
router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = function (io) {
  // ...
  io.sockets.emit('newTweet', { /* tweet info */ });
  // ...
  return router;
};
//module.exports = router;
