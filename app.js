const express = require('express')
const app = express()
const port = 4000
const path = require("path")
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"))
})

app.get('/index2', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index2.html"))
})

app.post('/index2', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index2.html"))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.html"))
})

app.get('/productDetailParlante', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productDetailParlante.html"))
})

app.get('/productDetailBicicleta', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productDetailBicicleta.html"))
})

app.get('/productDetailMicro', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productDetailMicro.html"))
})

app.get('/productDetailReposera', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productDetailReposera.html"))
})

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.html"))
})

app.get('/productCart', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productCart.html"))
})

app.post('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"))
})

app.post('/login', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.html"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
