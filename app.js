const express = require('express');
const app = express();
const PORT = 3000
app.listen(PORT, () => {
  console.log('listening on port 3000')
})

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path)
  //console.log(res.method + ' ' + res.path)
  //console.log(res)
  //console.log(res.method + ' ' + res.path)
  next();
})
app.get('/', (req, res, next) => {
  res.send('hiiiii there!!!!')
  next();
});
app.post('/modernism', (req, res, next)=> {
  res.send('post request to modernism')
})

// app.get('/is-anybody-in-there', (req, res, next) => {
//   res.send('neeeeeewsssss!!!!')
//   next()
// });




