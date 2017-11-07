const express = require('express');
const nunjucks  = require('nunjucks')
const volleyball  = require('volleyball')
const chalk  = require('chalk')
const routes = require('./routes');
const app = express();
const PORT = 3000

app.listen(PORT, () => {
    console.log('listening on port 3000')
})

app.use(volleyball)
app.use('/', routes);
app.use((req, res, next) => {
    next();
})

app.use('/', express.static('public'));

var locals = {
    title: 'Lord of the Nunjucks',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true})
// nunjucks.render('index.html', locals, function(err, res){
//     if (err) throw err;
//     console.log(locals)
// });

// app.get('/views/index.html', (req, res) => {
//     res.render('index', locals);
// })


// nunjucks.configure('/', {
//   autoescape: true,
//   express: app
// })
// app.get('/', function(req, res) {
//   res.render('./views/index.html');
// })
// nunjucks.renderString('Hello {{ username }}', { username: 'James' });
// var people = {
//   name:'Frodo'
// }
//nunjucks.render('/index.html', people)

// app.get('/is-anybody-in-there', (req, res, next) => {
//   res.send('neeeeeewsssss!!!!')
//   next()
// });
