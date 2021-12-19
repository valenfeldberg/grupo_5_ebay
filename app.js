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



/*const index2Router = require('./routes/index2');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

const productRouterCart = require('./routes/cart');
const agrearProducto = require('./routes/agregarProd');


const indexRouter = require('./routes/index');
app.use('/', indexRouter);


app.use('/index2', index2Router);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.use('/productCart', productRouterCart);
app.use('/agregarProd', agrearProducto);*/


// Sprint 4

const productRouter = require('./routes/product');
app.use('/', productRouter);
app.use('/product', productRouter);
app.use('/login', productRouter);
app.use('/logged', productRouter);
app.use('/carrito', productRouter);
app.use('/register', productRouter);