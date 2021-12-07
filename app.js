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

const indexRouter = require('./routes/index');
const index2Router = require('./routes/index2');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const productRouterParlante = require('./routes/productParlante');
const productRouterMicro = require('./routes/productMicro');
const productRouterBicicleta = require('./routes/productBicicleta');
const productRouterReposera = require('./routes/productReposera');
const productRouterCart = require('./routes/cart');


app.use('/', indexRouter);
app.use('/index2', index2Router);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/productDetailBicicleta', productRouterBicicleta);
app.use('/productDetailReposera', productRouterReposera);
app.use('/productDetailParlante', productRouterParlante);
app.use('/productDetailMicro', productRouterMicro);
app.use('/productCart', productRouterCart);