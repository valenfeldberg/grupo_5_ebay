const express = require('express')
const app = express()
const port = 4000
const path = require("path")
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.set('views', path.join(__dirname, 'views'));
app.set ('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var index2Router = require('./routes/index2');
var loginRouter = require('./routes/login');

app.use('/', indexRouter);
app.use('/index2', index2Router);
app.use('/login', loginRouter);